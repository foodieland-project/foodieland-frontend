function LoginHeader({ title, text }) {
  return (
    <div className="mx-6 text-left text-slate-700">
      <div className="flex">
        <h2 className="text-2xl font-semibold text-slate-600">{title}</h2>
      </div>
      <p className="text-gray-400 text-sm mt-1">{text}</p>
    </div>
  );
}

export default LoginHeader;
