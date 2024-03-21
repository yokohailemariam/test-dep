"use client";

import { lazy, useEffect, useState } from "react";
import { AllCategoriesHeader } from "./_components";
import { getVotersIpAddress } from "@/lib/redux/slices/indentitySlice/indentityThunk";
import { setFingerprintVote } from "@/lib/redux/slices/indentitySlice/identitySlice";
import dynamic from "next/dynamic";
import { useDispatch } from "@/lib/redux";
const Sponsors = lazy(() => import("./_components/Sponsors"));
const HomePageComponent = lazy(() => import("./_components/HomePageComponent"));
const Modal = lazy(() => import("./_components/Modal"));
const ParagraphModal = lazy(() => import("./_components/ParagraphModal"));
const CategoriesListView = lazy(
  () => import("./_components/CategoriesListView")
);

const ClientJs = dynamic(() => import("@/lib/utils/ClientFingerPrint"), {
  ssr: false,
});

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [fingerPrint, setFingerPrint] = useState(0);

  useEffect(() => {
    dispatch(getVotersIpAddress());
  }, [dispatch]);

  useEffect(() => {
    if (fingerPrint) {
      dispatch(setFingerprintVote(JSON.stringify(fingerPrint)));
    }
  }, [dispatch]);

  return (
    <>
      <ClientJs setFingerprint={setFingerPrint} />

      <HomePageComponent />

      <Sponsors />

      <div className="flex justify-center text-center gap-16 pt-2 text-black text-[2vh] md:text-[3vh]">
        <p>ሐምሌ 1 2013 - ሰኔ 30 2015</p>
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        homePageModal={true}
      >
        <ParagraphModal />
      </Modal>

      <p className=" justify-center text-center gap-16 pt-2 text-black text-[2vh] md:text-[2vh] md:px-56">
        <strong>፲፫ ተኛው</strong> አብረን ተጉዘናል ሁሉም ጥሩ ይሆናል ! ከ16 ዓመት በፊት ሸገር ራዲዮ ጣቢያ
        መደበኛ ስርጭቱን ሲጀምር የተከፈተ ዘፈን ነበር። ያኔ ዕወቁ የሙዚቃ ሠው ደረጃ መኰንን ፀደኒያ ገ/ማርቆስንና
        ሌቨንን አሳትፎ የሠራው ይሄንን ሙዚቃ ለዛሬው የላዛ ፕሮግራም አዘጋጅ ከሌሎች አራትና አምስት ሙዚቃዎች ጋር አዳብሎ
        ሠጥቶት ነበርና ነው ይሄ ዘፈን ለመክፈቻነት የዋለው .: በስተኋላ ሚካኤል በላይነህ ...{" "}
        <span
          className="text-[#00094B] underline hover:cursor-pointer"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Read more
        </span>
      </p>

      <AllCategoriesHeader />

      <CategoriesListView />
    </>
  );
};

export default HomePage;
