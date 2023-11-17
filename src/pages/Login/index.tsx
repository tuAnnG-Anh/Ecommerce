import { loginApi } from "@/api/auth";
import { Logo } from "@/components/Logo";
import "react-toastify/dist/ReactToastify.css";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Spin } from "antd";
import { useState } from "react";
import { authStore } from "@/store/auth";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "@/api/user";
import { JwtPayload } from "@/interfaces/Jwt";
import { useNavigate } from "react-router-dom";
import { IAccount } from "@/interfaces/IUser";

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateAuth } = authStore();
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: (user: IAccount) => loginApi(user),
    onSuccess(data) {
      localStorage.setItem("access_token", JSON.stringify(data?.accessToken));
      const decoded = jwtDecode(data.accessToken) as JwtPayload;
      if (decoded?.id) {
        handleGetDetailUser(decoded.id, data.accessToken, data.refreshToken);
      }
    },
  });
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate({
      email,
      password,
    });
  };
  const handleGetDetailUser = async (
    id: number | string,
    accessToken: string,
    refreshToken: string
  ) => {
    const res = await getUserById(id);
    updateAuth(res.data, accessToken, refreshToken);
    navigate("/");
  };
  return (
    <div>
      <div className="image-login bg-[url('./src/resources/images/loginimg.svg')] bg-top bg-cover bg-blend-multiply bg-no-repeat h-[26.875rem] py-8">
        <div>
          <Logo className="text-[1.5rem]" />
        </div>
      </div>
      <div className="px-8 container lg:w-9/12 mx-auto ">
        <form className="my-10 grid gap-8" onSubmit={handleLogin} method="POST">
          <div>
            <h1 className="font-Poppins font-medium text-[2.5rem] leading-[2.75rem] -tracking-[0.025rem] text-neutral-700">
              Sign In
            </h1>
            <p className="text-neutral-400 mt-6 leading-[1.625rem] ">
              Don’t have an accout yet?
              <a className="text-secondary-green font-semibold"> Sign up</a>
            </p>
          </div>
          {loginMutation?.data?.status === "ERR" && (
            <div className="p-4 bg-gray-gradient rounded border border-red-500">
              <div>
                <p className="text-red-500 px-2">
                  Incorrect username or password!
                </p>
              </div>
            </div>
          )}
          <input
            type="text"
            placeholder="Your username or email address "
            className="focus:outline-none leading-[1.625rem] text-neutral-400 pb-3 border-b"
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="input-password relative text-neutral-400">
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="focus:outline-none leading-[1.625rem]  pb-3 border-b w-full"
            />
            {showPassword ? (
              <EyeOutlined
                className="absolute right-0 top-0 text-2xl leading-none cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeInvisibleOutlined
                className="absolute right-0 top-0 text-2xl leading-none cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <div className="flex flex-row justify-between items-center">
            <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-5 h-5 bg-white border-2 border-neutral-400 peer peer-checked:border-0 peer-checked:bg-secondary-blue rounded">
                <img
                  className=""
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                  alt="tick"
                />
              </div>
              <span className="ml-3 leading-[1.625rem] text-neutral-400">
                Remember me
              </span>
            </label>
            <a
              href=""
              className="mr-4 text-neutral-700 font-semibold text-xs leading-5"
            >
              Forgot password?
            </a>
          </div>
          <Spin
            spinning={loginMutation.isPending}
            className="text-white"
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          >
            <button
              className="py-[0.62rem] w-full text-white leading-7 -tracking-[0.025rem] bg-neutral-700 hover:bg-neutral-500 rounded-lg"
              type="submit"
            >
              Sign Up
            </button>
          </Spin>
        </form>
      </div>
    </div>
  );
};
