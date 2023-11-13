import { getUser } from "@/api/user";
import { IUser } from "@/interfaces/IUser";
import { useQueryString } from "@/utils/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Modal, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { UserAddOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LIMIT = 10;
const columns: ColumnsType<IUser> = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "id",
    ellipsis: {
      showTitle: false,
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
    render: (_, record) => `${record.isAdmin}`,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    responsive: ["md"],
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "Updated At",
    dataIndex: "updatedAt",
    key: "updatedAt",
    ellipsis: {
      showTitle: false,
    },
  },
];
export const AdminUser: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const queryString: {
    page?: string;
  } = useQueryString();
  const page = Number(queryString?.page) || 1;
  console.log(page);
  const users = useQuery({
    queryKey: ["user", page, LIMIT],
    queryFn: () => getUser(page, LIMIT),
    staleTime: 1000 * 60,
    placeholderData: keepPreviousData,
  });
  console.log(users.data?.data);

  const dataSource = users.data?.data?.data;
  const totalItem = users.data?.data?.totalItem;
  // const totalPage = users.data?.data?.totalPage;
  // console.log(totalPage);

  // const handleCreateUser = useMutation({
  //   mutationFn: (_)=>
  // });
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
        // className="h-screen"
      />
    </div>
  );
};
