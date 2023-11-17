import { deleteUser, getUser } from "@/api/user";
import { IUser } from "@/interfaces/IUser";
import { useQueryString } from "@/utils/utils";
// import ImgCrop from "antd-img-crop";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  Button,
  Form,
  // Upload,
  Input,
  Modal,
  Popconfirm,
  Space,
  Table,
  Tag,
  DatePicker,
  message,
} from "antd";
const { RangePicker } = DatePicker;
import type { ColumnsType } from "antd/es/table";
import {
  UserAddOutlined,
  ReloadOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminUser: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const queryString: { page?: string; size?: string } = useQueryString();
  const page = Number(queryString?.page) || 1;
  const limit = Number(queryString?.size) || 10;
  const users = useQuery({
    queryKey: ["user", page, limit],
    queryFn: () => getUser(page, limit),
    staleTime: 1000 * 60,
    placeholderData: keepPreviousData,
  });

  const dataSource = users.data?.data?.data;
  const totalItem = users.data?.data?.totalItem;

  // const handleUpdateMutation = useMutation({
  //   mutationFn: (_) => updateUser(),
  // });

  const handleDelete = useMutation({
    mutationFn: (id: number | string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", page, limit] });
      message.success("Deleted!");
    },
  });
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns: ColumnsType<IUser> = [
    {
      title: "Number",
      key: "number",
      ellipsis: {
        showTitle: false,
      },
      render(_, __, index) {
        return index + 1;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Admin",
      dataIndex: "isAdmin",
      key: "isAdmin",
      render: (_, user) => {
        const color = !user.isAdmin ? "geekblue" : "green";
        const role = user.isAdmin ? "admin" : "customer";
        return (
          <Tag color={color} key={role}>
            {role}
          </Tag>
        );
      },
      ellipsis: {
        showTitle: false,
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      ellipsis: {
        showTitle: false,
      },
      render: (_, user) => {
        const date = new Date(user.createdAt);
        return `${date.toLocaleDateString("en-GB")} ${date.toLocaleTimeString(
          "en-GB"
        )}`;
      },
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      ellipsis: {
        showTitle: false,
      },
      render: (_, user) => {
        const date = new Date(user.createdAt);
        return `${date.toLocaleDateString("en-GB")} ${date.toLocaleTimeString(
          "en-GB"
        )}`;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, user) => (
        <Space size="middle">
          <Button
            type="primary"
            className="bg-secondary-blue"
            icon={<ReloadOutlined />}
          >
            Update
          </Button>
          <Popconfirm
            title="Delete the user"
            description="Are you sure to delete this user?"
            onConfirm={() => handleDelete.mutate(user._id)}
            okText="Yes"
            okButtonProps={{
              className: "bg-secondary-blue",
            }}
            cancelText="No"
          >
            <Button type="primary" danger icon={<DeleteFilled />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        size={"large"}
        className="bg-secondary-blue mb-4"
        onClick={showModal}
        icon={<UserAddOutlined />}
      >
        Add user
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ className: "bg-secondary-blue" }}
      >
        <Form>
          <Form.Item<IUser>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item<IUser>
            label="Image"
            name="image"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <ImgCrop
              rotationSlider
              // modalProps={{ style: { background: "blue" } }}
            >
              <Upload
                // action="http://localhost:3001/"
                listType="picture-card"
                // onChange={onChange}
                // onPreview={onPreview}

                multiple={false}
                maxCount={1}
              >
                Avatar
              </Upload>
            </ImgCrop>
          </Form.Item> */}
          <Form.Item<IUser>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IUser>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
      <Form layout="inline">
        <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <RangePicker showTime />
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          defaultCurrent: page,
          total: totalItem,
          onChange: (page, pageSize) => {
            navigate(`?page=${page}&size=${pageSize}`);
          },
        }}
        rowKey="_id"
        loading={users.isLoading}
      />
    </div>
  );
};
