import logo from './assets/BWL_logo.png';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import {FiLayout, FiFileText, FiImage, FiAlertCircle, FiSettings, FiChevronLeft, FiChevronDown, FiEye, FiPackage, FiUsers} from 'react-icons/fi';
import {RiPaletteLine} from 'react-icons/ri';
import {FaDesktop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa';
import {TbLayoutAlignBottom, TbLayoutAlignCenter, TbLayoutAlignLeft, TbLayoutAlignRight, TbLayoutAlignTop, TbLayoutAlignMiddle} from 'react-icons/tb';
import Tooltip from './components/Tooltip';
import profile from './assets/profile.jpg';
import Accordion from './components/Accordion';
import './App.css';

function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <aside className="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
          <img src={logo} alt="logo" />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
          <a href="/" className="rounded-xl group relative bg-gray-100 p-2 text-vivid-cyan hover:bg-gray-50">
            <AiOutlinePlusSquare className="h-6 w-6" />
            <Tooltip>Add elements <span className="text-gray-400">(A)</span></Tooltip>
          </a>
          <a href="/" className="rounded-xl group relative p-2 text-gray-400 hover:bg-gray-100">
            <FiLayout className="h-6 w-6" />
            <Tooltip>Layouts <span className="text-gray-400">(Y)</span></Tooltip>
          </a>
          <a href="/" className="rounded-xl group relative p-2 text-gray-400 hover:bg-gray-100">
            <RiPaletteLine className="h-6 w-6" />
            <Tooltip>Themes <span className="text-gray-400">(T)</span></Tooltip>
          </a>
          <a href="/" className="rounded-xl group relative p-2 text-gray-400 hover:bg-gray-100">
            <FiFileText className="h-6 w-6" />
            <Tooltip>Assets <span className="text-gray-400">(S)</span></Tooltip>
          </a>
          <a href="/" className="rounded-xl group relative p-2 text-gray-400 hover:bg-gray-100">
            <FiImage className="h-6 w-6" />
            <Tooltip>Images <span className="text-gray-400">(I)</span></Tooltip>
          </a>
        </nav>
        <div className="flex flex-col items-center gap-y-4 py-10">
          <button href="/" className="rounded-xl group relative p-2 text-gray-400 hover:bg-gray-100">
            <FiAlertCircle className="h-6 w-6" />
            <Tooltip>Help</Tooltip>
          </button>
          <button href="/" className="rounded-xl group relative p-2 text-gray-400 hover:bg-gray-100">
            <FiSettings className="h-6 w-6" />
            <Tooltip>Settings</Tooltip>
          </button>
          <button className="pt-2 rounded-full overflow-hidden">
            <img src={profile} alt="user" className="h-10 w-10 object-cover rounded-[50%]"/>
          </button>
        </div>
      </aside>
      <div className="flex-1 h-screen flex flex-col">
        <header className="h-18 bg-white flex gap-x-6 px-8 items-center justify-center border-b border-gray-200">
          <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
            <FiChevronLeft className="h-6 w-6 text-gray-400"/>
          </button>
          <button className="flex flex-col rounded-xl border border-gray-200 bg-gray-100 px-6 py-2">
            <div className="flex items-center gap-x-2">
              <span className="text-sm">Page: Homepage - Blog</span>
              <FiChevronDown className="h-5 w-5 text-gray-400"/>
            </div>
            <div className="text-xs text-gray-400">https://bigweblabs.com/</div>
          </button>
          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <FiEye className="h-6 w-6 text-gray-400"/>
            <span className="text-sm font-semibold leading-6">Preview</span>
          </button>
          <div className="h-full w-px bg-gray-200"/>
          <div className="flex items-center gap-x-3">
            <button className="rounded-xl p-2 text-vivid-cyan bg-gray-100">
              <FaDesktop className="h-6 w-6"/>
            </button>
            <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
              <FaTabletAlt className="h-6 w-6"/>
            </button>
            <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
              <FaMobileAlt className="h-6 w-6"/>
            </button>
            <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
              <FaMobileAlt className="h-6 w-6 rotate-90"/>
            </button>
          </div>
          <div className="h-full w-px bg-gray-200"/>
          <button className="flex items-center justify-center gap-x-3 rounded-xl bg-gray-100 px-4 py-2">
            <span className="text-sm font-semibold leading-6">960 PX / 100%</span>
            <FiChevronDown className="h-5 w-5 text-gray-400"/>
          </button>
          <button className="flex items-start justify-center rounded-xl bg-gray-100 p-2">
            <FiPackage className="h-6 w-6 text-gray-400"/>
          </button>
        </header>
      </div>
      <aside className="w-[300px] h-screen flex flex-col bg-white border-l border-gray-200">
        <div className="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6">
          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <FiUsers className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-semibold leading-6">Invite</span>
          </button>
          <button className="flex flex-1 items-center justify-center rounded-xl bg-vivid-cyan px-4 py-2 text-sm leading-6 text-white">Publish</button>
        </div>
        <div className="flex flex-col overflow-y-auto flex-1">
          <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
            <span className="text-sm font-semibold">Selector</span>
            <span className="text-sm text-gray-400">Inheriting {" "}
              <span className="font-medium text-gray-900">2 Selectors</span>
            </span>
          </div>
          <div className="border-b border-gray-200 px-6 py-4">
            <button className="flex items-center border border-gray-200 bg-gray-50 w-full px-3 py-1.5 rounded-xl justify-between">
            <div className="flex items-center gap-x-2">
              <span className="rounded-lg bg-white p-1 shadow">
                <FaDesktop className="h-5 w-5 text-vivid-cyan"/>
              </span>
              <span className="text-sm font-semibold text-vivid-cyan bg-blue-100 rounded-lg py-1 px-3">
                H1 - hero title
              </span>
            </div>
            <FiChevronDown className="h-5 w-5 text-gray-400"/>
            </button>
            <div className="mt-2 text-xs text-gray-400">
              1 on this page, 7 on other pages
            </div>
          </div>
          <Accordion title="Layout">
            <div className="flex items-center justify-between">
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <TbLayoutAlignBottom className="h-5 w-5 text-gray-400"/>
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <TbLayoutAlignCenter className="h-5 w-5 text-gray-400"/>
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <TbLayoutAlignLeft className="h-5 w-5 text-gray-400"/>
              </button>                  
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <TbLayoutAlignRight className="h-5 w-5 text-gray-400"/>
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <TbLayoutAlignTop className="h-5 w-5 text-gray-400"/>
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">                  
                <TbLayoutAlignMiddle className="h-5 w-5 text-gray-400"/>
              </button>
            </div>
          </Accordion>
          <Accordion title="Spacing">
            <div className="flex relative items-center justify-center rounded-xl border-2 border-dashed border-gray-200 py-10 px-12">
              <span className="absolute text-[10px] uppercase text-gray-400 top-2 left-2">margin</span>
              <span className="absolute text-[10px] uppercase text-gray-400 bottom-12 right-14">padding</span>
              <div className="relative w-full">
                <div className="absolute flex items-center justify-center inset-x-0 -translate-y-1/2 top-0 flex-col gap-2">
                  <input className="h-4 w-4 text-sm text-center outline-none" type="text" defaultValue={20}/>
                  <div className="h-2 w-2 border-2 border-vivid-cyan bg-white"></div>
                  <input className="h-4 w-4 text-sm text-center outline-none" type="text" defaultValue={0}/>
                </div>
                <div className="absolute flex items-center justify-center inset-y-0 translate-x-1/2 right-0 gap-2">
                  <input className="h-4 w-4 text-sm text-center outline-none" type="text" defaultValue={20}/>
                  <div className="h-2 w-2 border-2 border-vivid-cyan bg-white"></div>
                  <input className="h-4 w-4 text-sm text-center outline-none" type="text" defaultValue={0}/>
                </div>
                <div className="absolute flex items-center justify-center inset-x-0 translate-y-1/2 bottom-0 flex-col gap-2">
                  <input className="h-4 w-4 text-sm text-center outline-none" type="text" defaultValue={0}/>
                  <div className="h-2 w-2 border-2 border-vivid-cyan bg-white"></div>
                  <input className="h-4 w-4 text-sm text-center outline-none" type="text" defaultValue={0}/>
                </div>
                <div className="absolute flex items-center justify-center inset-y-0 -translate-x-1/2 left-0 gap-2">
                  <input className="h-4 w-4 text-sm text-center outline-none" type="text" defaultValue={0}/>
                  <div className="h-2 w-2 border-2 border-vivid-cyan bg-white"></div>
                  <input className="h-4 w-4 text-sm text-center outline-none" type="text" defaultValue={0}/>
                </div>
                <div className="h-24 w-full rounded-xl border-2 border-vivid-cyan px-10 py-8">
                  <div className="h-full w-full rounded bg-gray-200">

                  </div>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="Size">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute flex items-center inset-y-0 px-4 pointer-events-none">
                  <span className="texxt-sm text-gray-400">W</span>
                </div>
                <input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6" type="text" defaultValue="Auto" />
              </div>
              <div className="relative">
                <div className="absolute flex items-center inset-y-0 px-4 pointer-events-none">
                  <span className="texxt-sm text-gray-400">H</span>
                </div>
                <input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6" type="text" defaultValue="Auto" />
              </div>
              <div className="relative">
                <div className="absolute flex items-center inset-y-0 px-4 pointer-events-none">
                  <span className="texxt-sm text-gray-400">Min W</span>
                </div>
                <input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6" type="text" defaultValue="Auto" />
              </div>
              <div className="relative">
                <div className="absolute flex items-center inset-y-0 px-4 pointer-events-none">
                  <span className="texxt-sm text-gray-400">Min H</span>
                </div>
                <input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6" type="text" defaultValue="Auto" />
              </div>
              <div className="relative">
                <div className="absolute flex items-center inset-y-0 px-4 pointer-events-none">
                  <span className="texxt-sm text-gray-400">Max W</span>
                </div>
                <input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6" type="text" defaultValue="Auto" />
              </div>
              <div className="relative">
                <div className="absolute flex items-center inset-y-0 px-4 pointer-events-none">
                  <span className="texxt-sm text-gray-400">Max H</span>
                </div>
                <input className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6" type="text" defaultValue="Auto" />
              </div>
              <div className="col-span-2">
                <button className="relative w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-right">
                  <div className="absolute inset-y-0 flex items-center px-4">
                    <span className="text-sm text-gray-400">Overflow</span>
                  </div>
                  <span classNAme="flex items-center justify-end gap-x-2 text-sm font-semibold leading-6">
                    <FiEye className="h-5 w-5 text-gray-400"/>
                    <span>Invisible</span>
                  </span>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4"> 
                    <FiChevronDown className="h-5 w-5 text-gray-400"/>
                  </div>
                </button>
              </div>
            </div>
          </Accordion>
          <Accordion title="Typography">

          </Accordion>
          <Accordion title="Position">

          </Accordion>
          <Accordion title="Border">

          </Accordion>
          <Accordion title="Background">

          </Accordion>
        </div>
      </aside>
    </div>
  );
}

export default App;
