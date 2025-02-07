

function Button(props: { name: string; onClick?: () => void }) {
  return (
    <div>
      <button
        onClick={props.onClick} // Agar onClick pass hoga to chalega, warna ignore hoga
        className="w-[150px] h-[50px] rounded-[2px] bg-[#e62e84] text-white font-Josefin Sans"
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
