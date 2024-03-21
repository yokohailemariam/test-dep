"use client";
import { LoadingSpinner } from "@/app/_components";
import Modal from "@/app/_components/Modal";
import dynamic from "next/dynamic";
import NotFound from "./not-found";
import { useSingleCategoryHook } from "@/app/_category/[id]/SingleCategoriesHook";
import SingleCategoryRenderCandidate from "@/app/_components/SingleCategoryRenderCandidate";
import { DisplayImage } from "@/app/_components/DisplayImage";
import { useState } from "react";

const ClientJs = dynamic(() => import("@/lib/utils/ClientFingerPrint"), {
  ssr: false,
});

const AllCategory = () => {
  const [next, setNext] = useState(0);
  const ids = [9, 8, 1, 5, 3, 13, 15, 14, 12, 10];

  const {
    setSelected,
    setImageUrl,
    setShowModal,
    setFingerPrint,
    setCountItem,
    setVote,
    selected,
    imageUrl,
    showModal,
    countItem,
    loading,
    status,
    categoryDetail,
    categoryError,
    ip,
    finger_print,
    voteCandidate,
  } = useSingleCategoryHook(ids[next]);

  if (categoryError) {
    return <NotFound />;
  }

  if (status === "loading") {
    return (
      <div className="py-20">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <ClientJs setFingerprint={setFingerPrint} />

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="justify-center items-center text-2xl font-thin text-center mb-4">
          Already voted for this category please vote for other categories
          <div className="mt-4">
            <div className="border-[1px] border-opacity-30 border-t-slate-800"></div>
            <p className="p-4">{countItem.candidateName}</p>
            <p>Total Count {countItem.count}</p>
          </div>
        </div>
      </Modal>

      <div className="flex justify-center text-center gap-16 pt-2 text-black text-[2vh] md:text-[3vh]">
        <p>ሐምሌ 1 2013 - ሰኔ 30 2015</p>
      </div>

      <div className="flex justify-center px-2 md:px-10 md:gap-8 text-4xl hover:cursor-pointer py-6">
        {next > 0 && (
          <p
            onClick={() => {
              setNext(next - 1);
              setImageUrl("");
            }}
          >
            <span className="text-[1.6rem] px-2 mx-2 text-center bg-white rounded">
              {" "}
              ⬅
            </span>
          </p>
        )}
        <p className="font-[500] text-[20px] md:text-[40px]">
          {categoryDetail.category_name}
        </p>
      </div>

      {/* // */}
      <div className=" mx-2 md:mx-16 ">
        <div className="flex flex-col md:flex-row items-center justify-evenly py-10">
          <div className="pb-8">
            <DisplayImage
              artistName={countItem.candidateName}
              imageUrl={imageUrl}
              className={`md:hidden rounded-[14px]  ${
                imageUrl === ""
                  ? ""
                  : "shadow-2xl transition-all duration-300 hover:scale-105"
              } aspect-square object-cover`}
            />
          </div>
          <SingleCategoryRenderCandidate
            selected={selected}
            setSelected={setSelected}
            setImageUrl={setImageUrl}
            setVote={setVote}
            setCountItem={setCountItem}
            categoryDetail={categoryDetail}
            ip={ip}
            finger_print={finger_print}
          />

          <>
            <div>
              <DisplayImage
                artistName={countItem.candidateName}
                imageUrl={imageUrl}
                className={`hidden md:block rounded-[14px]  ${
                  selected === 0
                    ? ""
                    : "shadow-2xl transition-all duration-300 hover:scale-105"
                } aspect-square object-cover`}
              />

              <div className="flex gap-4 itesm-center justify-center mt-6">
                {loading === "loading" ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    {next < 9 && (
                      <button
                        type="button"
                        className={`bg-black text-white  text-[18px] md:text-[24px] lg:text-[30px] px-6 rounded-full py-2 shadow-lg `}
                        onClick={() => {
                          setNext(next + 1);
                          setSelected(0);
                          setImageUrl("");
                        }}
                      >
                        Skip
                      </button>
                    )}

                    <button
                      type="button"
                      className={`bg-white ${
                        selected === 0
                          ? "text-gray-400 hover:shadow-lg"
                          : "text-black"
                      }  text-[18px] md:text-[24px] lg:text-[30px] px-6 rounded-full py-2 shadow-lg`}
                      disabled={selected === 0}
                      onClick={voteCandidate}
                    >
                      Continue
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default AllCategory;
