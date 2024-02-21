import React from 'react'

function App() {
  return (
    <div class="bg-black text-white">
      <div class="flex md:container mx-auto my-4">
      {/* <!-- first section sidebar section --> */}

      <div class="first w-16 md:w-[70%]">
        <div class="sidebar md:items-end flex flex-col sticky top-0">
          <div class="logo invert my-4 self-start mx-2 md:mx-16">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="m-auto w-12 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
            >
              <g>
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                ></path>
              </g>
            </svg>
          </div>
          <ul
            class="flex flex-col text-2xl space-y-3 md:px-11 font-bold w-full"
          >
            <li
              class="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
            >
              <span class="material-symbols-outlined text-3xl">home</span
              ><span class="hidden md:block">Home</span>
            </li>
            <li
              class="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
            >
              <span class="material-symbols-outlined text-3xl">search</span
              ><span class="hidden md:block">Explore</span>
            </li>
            <li
              class="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
            >
              <span class="material-symbols-outlined text-3xl"
                >notifications</span
              ><span class="hidden md:block">Notifications</span>
            </li>
            <li
              class="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
            >
              <span class="material-symbols-outlined text-3xl">star</span
              ><span class="hidden md:block">Grok</span>
            </li>
            <li
              class="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
            >
              <span class="material-symbols-outlined text-3xl">list</span
              ><span class="hidden md:block">Lists</span>
            </li>
            <li
              class="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
            >
              <span class="material-symbols-outlined text-3xl">bookmark</span
              ><span class="hidden md:block">Bookmarks</span>
            </li>
            <li
              class="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
            >
              <span class="material-symbols-outlined text-3xl">co_present</span
              ><span class="hidden md:block">Communities</span>
            </li>
            <li
              class="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
            >
              <span class="material-symbols-outlined text-3xl">star</span
              ><span class="hidden md:block">Premium</span>
            </li>
            <li
              class="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
            >
              <span class="material-symbols-outlined text-3xl">person</span
              ><span class="hidden md:block">Profile</span>
            </li>
            <li
              class="flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit hover:bg-gray-900 hover:cursor-pointer px-5 py-3 hover:rounded-full"
            >
              <span class="material-symbols-outlined text-3xl">add</span
              ><span class="hidden md:block">More</span>
            </li>
            <li>
              <div class="button w-full text-center my-4">
                <button
                  class="hidden md:block bg-[#1d9bf0] px-20 text-xl rounded-full py-3 text-white"
                >
                  Post
                </button>
                <button
                  class="md:hidden bg-[#1d9bf0] px-2 md:px-4 text-xl rounded-full py-1 md:py-3 text-white"
                >
                  <span class="material-symbols-outlined"> draw </span>
                </button>
              </div>
            </li>
          </ul>

          <div class="userprofile w-full mt-10 hidden md:flex">
            <div class="item p-3 items-center gap-5 justify-center mx-5 px-3 flex hover:bg-gray-800 hover:rounded-full cursor-pointer w-fit">
              <div class="p1">
                <img
                  class=" w-12 h-12 rounded-full"
                  src="https://yt3.ggpht.com/yti/AGOGRCrF3J_Nu807D6-KBx4div1Vtddmg_GmPWLK7eDfTDE=s88-c-k-c0x00ffffff-no-rj"
                />
              </div>
                  <div class="p2">
                      <div>Ayush jain</div>
                      <div class="text-gray-700">@ayushjain</div>
                  </div>
                  <div class="dot text-2xl">
                    ...
                  </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- second section middle section --> */}

      <div class="second w-full border-[1px] border-x-gray-600 border-y-black">
        <div class="top flex p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80">
          <div
            class="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[18%]"
          ></div>
          <div class="left w-1/2 flex justify-center text-xl">For You</div>
          <div class="right w-1/2 flex justify-center text-xl">Following</div>
          <div class="settings mx-2">
            <span class="material-symbols-outlined"> settings </span>
          </div>
        </div>
        <div class="h-[1px] w-full bg-gray-700"></div>
        <div class="whatishapp flex gap-4 my-3">
          <div class="img m-2 w-16">
            <img
              class="w-[100px] h-[70px] rounded-[50%]"
              src="https://yt3.ggpht.com/yti/AGOGRCrF3J_Nu807D6-KBx4div1Vtddmg_GmPWLK7eDfTDE=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div class="w-full">
            <input
              class="w-full h-7 my-2 text-xl bg-black outline-none text-white"
              type="text"
              placeholder="What is happening?!"
            />
            <div
              class="text-blue-600 flex items-center gap-2 text-xl w-full my-4"
            >
              <span class="material-symbols-outlined"> globe_asia </span>
              <span class="font-bold">Everyone can reply</span>
            </div>
            <div class="w-[90%] h-[0.2px] bg-gray-400 my-3"></div>
            <div class="flex justify-between">

              {/* <!-- blueicons  --> */}

              <div class="blueicons items-center flex gap-2 text-blue-400">
                <span class="material-symbols-outlined cursor-pointer">
                  image
                </span>
                <span class="material-symbols-outlined cursor-pointer">
                  gif
                </span>
                <span class="material-symbols-outlined cursor-pointer">
                  ballot
                </span>
                <span class="material-symbols-outlined cursor-pointer">
                  sentiment_satisfied
                </span>
                <span class="material-symbols-outlined cursor-pointer">
                  calendar_month
                </span>
                <span class="material-symbols-outlined cursor-pointer">
                  pin_drop
                </span>
              </div>
              <div class="postbutton">
                <button
                  class="bg-[#0c83d2f1] px-6 mx-5 text-sm rounded-full py-2 text-white font-bold"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- x post started --> */}

        <div class="posts">
          <div class="post flex border-[1px] border-y-gray-600 border-x-0">
            <div class="image m-4">
              <img
                class="w-[100px] h-[70px] rounded-[50%]"
                src="https://pbs.twimg.com/profile_images/1630375482385395718/iCV3v5TL_bigger.jpg"
              />
            </div>
            <div class="content my-3">
              <span class="font-bold hover:underline text-white cursor-pointer">
                Zee News</span
              ><span class="text-gray-600">@ZeeNews · 6h</span>
              <div>
                क्या आप बता सकते हैं कि किस नदी के तट पर बसी हुई है राम नगरी
                अयोध्या?
              </div>
              <div class="postimg m-4 ml-0">
                <img
                  class="rounded-xl"
                  src="https://pbs.twimg.com/media/GEX6cmEbQAAGWVS?format=jpg&name=small"
                  alt=""
                />
              </div>
              <div class="icons flex justify-between mx-3 text-gray-600">
                <div
                  class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                >
                  <span class="material-symbols-outlined"> chat_bubble </span>
                  7.5K
                </div>
                <div
                  class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                >
                  <span class="material-symbols-outlined"> repeat </span> 15k
                </div>
                <div
                  class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                >
                  <span class="material-symbols-outlined"> favorite </span> 889k
                </div>
                <div
                  class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                >
                  <span class="material-symbols-outlined"> bar_chart </span>
                  552k
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="posts">
          <div class="post flex border-[1px] border-y-gray-600 border-x-0">
            <div class="image m-4">
              <img
                class="w-[100px] h-[70px] rounded-[50%]"
                src="https://pbs.twimg.com/profile_images/1692077157512785920/z9C1zW17_200x200.jpg"
              />
            </div>
            <div class="content my-3">
              <span class="font-bold hover:underline text-white cursor-pointer"
                >BCCI</span
              ><span class="text-gray-600">@BCCI · 2h</span>
              <div>
                Virat Kohli withdraws from first two Tests against England
                citing personal reasons.
              </div>
              <div class="postimg m-4 ml-0">
                <img
                  class="rounded-xl"
                  src="https://pbs.twimg.com/card_img/1749362773388361728/NsaBLXkT?format=jpg&name=small"
                  alt=""
                />
              </div>
              <div class="icons flex justify-between text-gray-600 mx-3">
                <div
                  class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                >
                  <span class="material-symbols-outlined"> chat_bubble </span>
                  51K
                </div>
                <div
                  class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                >
                  <span class="material-symbols-outlined"> repeat </span> 558k
                </div>
                <div
                  class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                >
                  <span class="material-symbols-outlined"> favorite </span> 889k
                </div>
                <div
                  class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                >
                  <span class="material-symbols-outlined"> bar_chart </span>
                  272k
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="posts">
          <div class="post flex border-[1px] border-y-gray-600 border-x-0">
            <div class="flex">
              <div class="image m-4">
                <img
                  class="w-[100px] h-[70px] rounded-[50%]"
                  src="https://pbs.twimg.com/profile_images/1681726458815995904/5YlSezBn_bigger.jpg"
                />
              </div>

              <div class="content my-3">
                <span
                  class="font-bold hover:underline text-white cursor-pointer"
                >
                  Cinema Koott</span
                ><span class="text-gray-600">@cinemakoott · 8h</span>
                <div>🎞️ #Kalki2898AD Cameo Updates 🔥</div>
                <div class="postimg m-4 ml-0">
                  <img
                    class="rounded-xl"
                    src="https://pbs.twimg.com/media/GEajUbJbUAAdz0v?format=jpg&name=small"
                    alt=""
                  />
                </div>
                <div class="icons flex justify-between text-gray-600 mx-3">
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> chat_bubble </span>
                    1K
                  </div>
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> repeat </span> 8k
                  </div>
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> favorite </span>
                    889
                  </div>
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> bar_chart </span>
                    212k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="posts">
          <div class="post flex border-[1px] border-y-gray-600 border-x-0">
            <div class="flex">
              <div class="image m-4">
                <img
                  class="w-[100px] h-[70px] rounded-[50%]"
                  src="https://pbs.twimg.com/profile_images/1626204622401703939/ZqlQ3Um9_bigger.jpg"
                />
              </div>
              <div class="content my-3">
                <span
                  class="font-bold hover:underline text-white cursor-pointer"
                  >Allu Arjun</span
                ><span class="text-gray-600">@alluarjun · Jan 19</span>
                <div>Happy birthday to my sweetest cousin @IAmVarunTej !</div>
                <div class="postimg m-4 ml-0">
                  <img
                    class="rounded-xl"
                    src="https://pbs.twimg.com/media/GELghgtbkAAGzA5?format=jpg&name=900x900"
                    alt=""
                  />
                </div>
                <div class="icons flex justify-between text-gray-600 mx-3">
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> chat_bubble </span>
                    1K
                  </div>
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> repeat </span> 8k
                  </div>
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> favorite </span>
                    889
                  </div>
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> bar_chart </span>
                    212k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="posts">
          <div class="post flex border-[1px] border-y-gray-600 border-x-0">
            <div class="flex">
              <div class="image m-4">
                <img
                  class="w-[130px] h-[50px] rounded-lg"
                  src="https://pbs.twimg.com/profile_images/1295555226720641026/gTnCg1RF_bigger.jpg"
                />
              </div>
              <div class="content my-3">
                <span
                  class="font-bold hover:underline text-white cursor-pointer"
                  >OnePlus</span
                ><span class="text-gray-600">@oneplus · 4h</span>
                <div>
                  🚨 We're live! A big hello to everyone watching the
                  #SmoothBeyondBelief Launch Event online and live at our
                  stunning Pragati Maidan venue in New Delhi! Let's welcome
                  @ishitag to the stage for a quick recap of the past
                  #10YearsofOnePlus👏
                </div>
                <div class="postimg m-4 ml-0">
                  <img
                    class="rounded-xl"
                    src="https://pbs.twimg.com/media/GEiFX9UaQAAhZVu?format=jpg&name=small"
                    alt=""
                  />
                </div>
                <div class="icons flex justify-between text-gray-600 mx-3">
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> chat_bubble </span>
                    1K
                  </div>
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> repeat </span> 8k
                  </div>
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> favorite </span>
                    889
                  </div>
                  <div
                    class="icon flex items-center justify-center p-1 cursor-pointer hover:font-bold hover:text-blue-500 hover:bg-gray-900 hover:rounded-full"
                  >
                    <span class="material-symbols-outlined"> bar_chart </span>
                    212k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- third section last one  --> */}

      <div class="third w-full hidden md:block">

        {/* <!-- search bar --> */}

        <div class="search m-3">
          <input
            type="text"
            class="w-1/2 rounded-full bg-[#16181c] text-white px-4 py-2"
            placeholder="search"
          />
        </div>

        {/* <!-- whats happening --> */}

        <div
          class="whats sticky top-0 m-3 bg-[#16181c] w-1/2 py-5 rounded-xl space-y-3"
        >
          <h1 class="text-xl font-bold px-3">Whats Hppening</h1>
          <div class="item p-3 hover:bg-gray-800 cursor-pointer px-3">
            <div class="text-sm text-gray-300">Trending in India</div>
            <div class="font-bold">#Orry</div>
            <div class="text-sm text-gray-300">40.2k Posts</div>
          </div>
          <div class="item p-3 hover:bg-gray-800 cursor-pointer px-3">
            <div class="text-sm text-gray-300">Trending in India</div>
            <div class="font-bold">#Ram_Mandir</div>
            <div class="text-sm text-gray-300">80.2k Posts</div>
          </div>
          <div class="item p-3 hover:bg-gray-800 cursor-pointer px-3">
            <div class="text-sm text-gray-300">Trending in India</div>
            <div class="font-bold">#Political</div>
            <div class="text-sm text-gray-300">20.2k Posts</div>
          </div>
          <div class="item p-3 hover:bg-gray-800 cursor-pointer px-3">
            <div class="text-sm text-gray-300">Trending in India</div>
            <div class="font-bold">#News</div>
            <div class="text-sm text-gray-300">10.2k Posts</div>
          </div>
        </div>

        {/* <!-- who to follow --> */}

        <div
          class="who sticky top-[50vh] m-3 bg-[#16181c] w-1/2 py-5 rounded-xl space-y-1"
        >
          <h1 class="text-xl font-bold px-3">Who To Follow</h1>

          {/* <!-- 1st follow --> */}

          <div
            class="item p-3 items-center gap-2 px-3 flex justify-between hover:bg-gray-800 cursor-pointer"
          >
            <div class="flex gap-3">
              <div class="p1">
                <img
                  class="w-12 h-12 rounded-lg"
                  src="https://pbs.twimg.com/profile_images/1288505652352921600/1avkV0ZZ_x96.jpg"
                />
              </div>
              <div class="p2">
                <div>OnePlus</div>
                <div class="text-gray-700">@oneplus</div>
              </div>
            </div>
            <div class="p3">
              <button
                class="bg-white text-black px-5 py-2 rounded-full font-bold"
              >
                Follow
              </button>
            </div>
          </div>

          {/* <!-- 2nd follow  --> */}

          <div
            class="item p-3 items-center gap-2 px-3 flex justify-between hover:bg-gray-800 cursor-pointer"
          >
            <div class="flex gap-3">
              <div class="p1">
                <img
                  class="w-12 h-12 rounded-lg"
                  src="https://pbs.twimg.com/profile_images/1288505652352921600/1avkV0ZZ_x96.jpg"
                />
              </div>
              <div class="p2">
                <div>OnePlus</div>
                <div class="text-gray-700">@oneplus</div>
              </div>
            </div>
            <div class="p3">
              <button
                class="bg-white text-black px-5 py-2 rounded-full font-bold"
              >
                Follow
              </button>
            </div>
          </div>

          {/* <!-- 3rd follow --> */}

          <div
            class="item p-3 items-center gap-2 px-3 flex justify-between hover:bg-gray-800 cursor-pointer"
          >
            <div class="flex gap-3">
              <div class="p1">
                <img
                  class="w-12 h-12 rounded-lg"
                  src="https://pbs.twimg.com/profile_images/1288505652352921600/1avkV0ZZ_x96.jpg"
                />
              </div>
              <div class="p2">
                <div>OnePlus</div>
                <div class="text-gray-700">@oneplus</div>
              </div>
            </div>
            <div class="p3">
              <button
                class="bg-white text-black px-5 py-2 rounded-full font-bold"
              >
                Follow
              </button>
            </div>
          </div>

          {/* <!-- 4th follow --> */}

          <div
            class="item p-3 items-center gap-2 px-3 flex justify-between hover:bg-gray-800 cursor-pointer"
          >
            <div class="flex gap-3">
              <div class="p1">
                <img
                  class="w-12 h-12 rounded-lg"
                  src="https://pbs.twimg.com/profile_images/1288505652352921600/1avkV0ZZ_x96.jpg"
                />
              </div>
              <div class="p2">
                <div>OnePlus</div>
                <div class="text-gray-700">@oneplus</div>
              </div>
            </div>
            <div class="p3">
              <button
                class="bg-white text-black px-5 py-2 rounded-full font-bold"
              >
                Follow
              </button>
            </div>
          </div>

          {/* <!-- show more button  --> */}

          <div class="text-blue-600 px-3 underline my-5 hover:font-bold hover:cursor-pointer"
          >Show More</div>
        </div>

        {/* <!-- t&c  --> */}

        <div class="terms sticky top-[84vh] m-3 text-xs text-gray-500 px-3 w-1/2 py-5 space-y-1">
           <span class="hover:underline cursor-pointer mr-2">Terms of service</span> 
           <span class="hover:underline cursor-pointer mr-2">Privacy Policy</span> 
           <span class="hover:underline cursor-pointer mr-2">Accessibility</span> 
           <span class="hover:underline cursor-pointer mr-2">Ads info</span> 
           <span class="hover:underline cursor-pointer mr-2">More</span> 
           <span class="hover:underline cursor-pointer mr-2">&#169; 2024 X Corp.</span> 
        </div>

      </div>
    </div>
    </div>
    
  );
}

export default App;
