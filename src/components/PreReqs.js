import PageHeader from "./PageHeader";
import QnA from "./QnA";
import Picture from "./assets/Blue3.jpg"

export default function PreReqs() {
    const PreReqData = [
        {
            qn: 'PreReq 1',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
        {
            qn: 'PreReq 2',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
        {
            qn: 'PreReq 3',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
    ];
    return (
        <div>        
            <PageHeader title='Pre-Requisites' pic={Picture}/>
            <QnA data={PreReqData}/>
        </div>
    );
}