/* eslint-disable react/prop-types */
function Panel({
    title,
    children,
    isActive,
    onShow
}) {
    console.log(isActive, onShow)
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Show
                </button>
            )}
        </section>
    );
}

export default Panel