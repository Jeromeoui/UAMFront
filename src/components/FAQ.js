import PageHeader from "./PageHeader";
import QnA from "./QnA";

export default function FAQ() {
    const qData = [
        {
            qn: 'Question 1',
            ans: `HAHALorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
        {
            qn: 'Question 2',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
        {
            qn: 'Question 3',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
    ];

    return (
        <div>
            <PageHeader title='FAQ'/>
            <QnA data={qData}/>
        </div>
    );
}