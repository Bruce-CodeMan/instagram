import { RecoilRoot } from "recoil";

// Custom Imports
import Header from "./containers/Header"
import Content from "./containers/Content"
import UploadModal from "./components/UploadModal"

function App() {

  return (
   <div>
    <RecoilRoot>
      {/* Header */}
      <Header />

      {/* Content */}
      <Content />

      {/* Upload Modal */}
      <UploadModal />
    </RecoilRoot>
   </div>
  )
}

export default App
