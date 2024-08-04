


type SocialLinkProps = {
    element: JSX.Element;
    link: string;
  };
  
  function SocialLinks({ element, link }: SocialLinkProps) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {element}
      </a>
    );
  }
  
  export default SocialLinks;
  