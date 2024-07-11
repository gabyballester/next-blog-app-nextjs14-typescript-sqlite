import Link from "next/link";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/feed">Feed</Link>
        </li>
        <li>
          <Link className="cta-link" href="/new-post">
            New Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};
