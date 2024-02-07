import { FC } from 'react';
import { Link } from 'react-router-dom';
import './link-default.scss';

interface IButtonDefaultProps {
  text: string;
  path: string;
  classes?: string;
}

const LinkDefault: FC<IButtonDefaultProps> = ({ text, path, classes }) => {
  return (
    <Link className={`link-default ${classes ? classes : ''}`} to={path}>
      {text}
    </Link>
  );
};

export default LinkDefault;
