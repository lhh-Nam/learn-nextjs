import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="header">
      <div className="logo">
     
          <Image
            src="/logo1.png"
            alt="Picture of the author"
            width={128}
            height={77}
          />
        
      </div>

      <ul className="navbar">
        <Link href="/">
          <li>Home</li>
        </Link>

        <Link href="/about">
          <li>About</li>
        </Link>

        <Link href="/blog">
          <li>Blog</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
