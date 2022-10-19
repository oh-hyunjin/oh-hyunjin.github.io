import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                오현진 블로그~
                <br className="hidden lg:inline-block"/>
                
            </h1>
            <p className="mb-8 leading-relaxed">
            여기에 프로필
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