import Stories from "../Stories";
import Posts from "../Posts";
import MiniPorfile from "../MiniProfile";

const Content = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
            <section className="md:col-span-2">
                {/* Stories */}
                <Stories />
                {/* Posts */}
                <Posts />
            </section>

            <section className="hidden md:inline-grid md:col-span-1">
                <div className="fixed w-[380px]">
                    {/* Mini Profile */}
                    <MiniPorfile />
                    {/* Suggections */}

                </div>

            </section>
        </div>
    )
}

export default Content;