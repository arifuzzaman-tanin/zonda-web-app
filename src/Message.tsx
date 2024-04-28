function Message() {
    const formattedName = getName("Md. Arifuzzaman Tanin");

    return (
        <h1 className="text-primary">{formattedName}</h1>
    );
}

function getName(name: string) {
    const greeting = "Hello, ";
    const formattedName = name ? name : "World";

    return greeting + formattedName;
}

export default Message;
