import Image from "next/image"

export default function PostItem({data}){

    const Title = data.properties.이름.title[0].plain_text
    const githubLink = data.properties.Github.url
    const description = data.properties.description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url // 이미지가 file인것도, external도 있어서.
    const tags = data.properties.태그.multi_select
    const start = data.properties.날짜.date.start
    const end = data.properties.날짜.date.end

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        console.log(`startDate: ${startDate}`)
        console.log(`endDate: ${endDate}`)

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`기간: ${result}`)
        return result;
    }

    return (
        <div className="post-card">
           
            <Image
                className="rounded-t-xl" // tailwindcss 공식문서에 있음
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
           
            <div className="p-4 flex flex-col w-full">
                <h1 className="text-2xl font-bold">{Title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={githubLink}>깃허브 바로가기</a>
                <p className="my-1">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)})일
                </p>
                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>

            </div>
        </div>
    );
}