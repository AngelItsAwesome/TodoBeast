import '../loginStyles/normalize.css';
import '../loginStyles/Base.css';
// eslint-disable-next-line react/prop-types
function Base({ children }) {
    return (
        <div className={"content"}>
            <div className={"content__principal"}>
                <h1 className={"content__header"}>TodoBeast</h1>
                <main className={"content__main"}>
                    {children}
                </main>
                <footer className={"content__footer"}>
                    <h1>&copy; All rights reserved by: Angel</h1>
                </footer>
            </div>
            <aside className="content__aside"></aside>
        </div>
    );
}
export default Base;