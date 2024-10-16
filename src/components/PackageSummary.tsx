import blem from "blem";
import RepoGithub from "@assets/react-icons/Github.svg.tsx";
import RepoGitlab from "@assets/react-icons/Gitlab.svg.tsx";
import RepoIcon from "@assets/react-icons/Repo.svg.tsx";
import Tag from "@components/Tag.tsx";
import "@components/PackageSummary.scss";

const PackageSummary = ({
  name,
  description,
  published,
  official,
  version,
  repo,
  author,
}) => {
  const [repoicon, Icon] = repo.includes("github")
    ? ["github", RepoGithub]
    : repo.includes("gitlab")
      ? ["gitlab", RepoGitlab]
      : ["repo", RepoIcon];

  const bem = blem("PackageSummary");

  return (
    <div className={bem("")}>
      <header className={bem("header")}>
        <strong className={bem("name")}>{name}</strong>
        {version ? <em className={bem("version")}>v{version}</em> : null}
      </header>
      <div className={bem("content")}>
        {description ? (
          <p className={bem("description")}>{description}</p>
        ) : null}
        <a href={repo} className={bem("link", ["repo"])}>
          <Icon className={bem("repo", [repoicon])} />
        </a>
      </div>
      <footer className={bem("footer")}>
        <div className={bem("authorbox")}>
          <a href={`/author/${author}`} className={bem("link", ["author"])}>
            <img
              src={`https://github.com/${author}.png?size=24`}
              className={bem("avatar")}
              alt={author}
              width={24}
              height={24}
            />
            <span className={bem("author-text")}>{author}</span>
          </a>
        </div>
        <div className={bem("tagbox")}>
          {official ? <Tag name="Official" /> : null}
          {published ? <Tag name="Published" /> : null}
        </div>
      </footer>
    </div>
  );
};

export default PackageSummary;
