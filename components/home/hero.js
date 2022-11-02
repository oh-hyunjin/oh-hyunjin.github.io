import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-6 flex flex-col md:items-start md:text-left m-10 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Hyunjin Blog
                    <br className="hidden lg:inline-block"/>
                </h1>
                <p className="mb-9 leading-relaxed">
                안녕하세요 오현진의 블로그입니다!
                </p>
                <div className="flex justify-center">
                    <Link href="/post">
                        <a className="btn-post">
                            포스트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}