import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, SelectProps } from "antd";

const option: SelectProps["options"] = [
  {
    label: "Categories  ",
    options: [
      { label: "Living Room", value: "livingRoom" },
      { label: "Bedroom", value: "bedRoom" },
      { label: "Kitchen", value: "kitchen" },
      { label: "Bathroom", value: "badRoom" },
      { label: "Dinning", value: "dinning" },
      { label: "Outdoor", value: "outdoor" },
    ],
  },
];
export const AdminProduct: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form onFinish={onFinish}>
      <label htmlFor="name">Name</label>
      <Form.Item>
        <Input placeholder="Name product" style={{ width: "60%" }} />
      </Form.Item>
      <label htmlFor="type">Type</label>
      <Form.Item>
        <Select
          // mode="multiple"
          // defaultValue={["lucy"]}
          style={{ width: "60%" }}
          onChange={handleChange}
          options={option}
          placeholder={"Categories"}
        />
      </Form.Item>
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 1) {
                return Promise.reject(new Error("At least 2 passengers"));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <div>
                <label>Color: {index + 1}</label>
                <Form.Item required={false} key={field.key}>
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input passenger's name or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder="passenger name"
                      style={{ width: "60%" }}
                    />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              </div>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Input placeholder="Description" style={{ width: "60%" }} />
      </Form.Item>{" "}
      <Form.Item>
        <Input placeholder="Description" style={{ width: "60%" }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
