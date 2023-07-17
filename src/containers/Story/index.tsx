interface IProps {
    username: string;
    img: string;
}

const Story = ({ username, img }: IProps) => {
    return (
        <div>
            <img src={img} alt="" />
            <p>{ username }</p>
        </div>
    )
}

export default Story;