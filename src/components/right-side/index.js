import Content from "./content/Content";

const RightSide = ({
    contentConfig
}) => {
    return (
        <Content
            description={contentConfig.description}
            author={contentConfig.author}
            role={contentConfig.role}
        />
    );
}

export default RightSide;
