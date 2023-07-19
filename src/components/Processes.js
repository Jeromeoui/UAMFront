import PageHeader from "./PageHeader";
import QnA from "./QnA";

export default function Processes() {
    const ProcessesData = [
        {
            qn: 'Process 1',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
        {
            qn: 'Process 2',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
        {
            qn: 'Process 3',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
    ];
    return (
        <div>
            <PageHeader title='Processes'/>
            <QnA data={ProcessesData}/>
        </div>
    );
}