import Image from "next/image";

export default function footer() {
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-black text-white">
      <div className="w-2/3 mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex flex-col gap-6">
          <Image
            src="/logo_hvid_opt.png"
            alt="Logo"
            width={300}
            height={300}
            className="w-40 md:w-56 h-auto"
          />
          <p>
            KONKRET I/S | CVR: 45525260 <br /> Prinsesse Charlottes Gade 38,
            2200 København N
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
}
