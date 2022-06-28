import { htmlString } from "../data/constants";

function Page() {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>;
}

export default Page;
