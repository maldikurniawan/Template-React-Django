import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/sdpi.png";
import { icons } from "../../assets/icons";
import { PulseLoader } from "react-spinners";
import axios from "axios";
import { API_URL_login } from "../../constants";
import Swal from "sweetalert2";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const doSubmit = (e) => {
    setLoading(true);
    axios({
      method: "POST",
      url: API_URL_login,
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.data) {
          localStorage.setItem("refresh", res.data.refresh);
          localStorage.setItem("access", res.data.access);
          navigate("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  useEffect(() => {
    const access = localStorage.getItem("access");
    if (access) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-200">
      <div className="bg-white w-full sm:w-[450px] p-8 rounded-lg mx-4 z-30 shadow-lg">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="logo" className="w-48 drop-shadow-lg" />
        </div>
        <div>
          <form
            className="gap-2 flex flex-col"
            onKeyPress={(e) => e.key === "Enter" && doSubmit()}
          >
            <div className="relative">
              <span className="absolute text-gray-400 top-4 left-4">
                {icons.fauser}
              </span>
              <input
                className="w-full outline-none border border-gray-300 rounded-md pl-12 px-4 py-3 focus:shadow transition-all"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
            </div>
            <div className="relative">
              <span className="absolute text-gray-400 top-4 left-4">
                {icons.faunlock}
              </span>
              <input
                className="w-full outline-none border border-gray-300 rounded-md pl-12 px-4 py-3 focus:shadow transition-all"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={visiblePassword ? "text" : "password"}
              />
              <div
                className="absolute text-gray-400 top-[13px] right-4 text-2xl cursor-pointer"
                onClick={() => setVisiblePassword(!visiblePassword)}
              >
                {visiblePassword ? icons.aifilleyeinvisible : icons.aifilleye}
              </div>
            </div>
            <button
              className="w-full flex justify-center items-center leading-tight mt-2 font-medium outline-none text-white border border-gray-300 rounded-md py-3  bg-primary-base hover:bg-primary-baseHover hover:shadow-md active:bg-primary-baseActive active:shadow-lg transition-all"
              type="button"
              disabled={loading ? true : false}
              onClick={(e) => doSubmit(e)}
            >
              {loading ? <PulseLoader color="#fff" size={11} /> : "LOGIN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
