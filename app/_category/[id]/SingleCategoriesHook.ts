import {
  clearVotingState,
  getSingleVoteCategory,
  getVotersIpAddress,
  setFingerprintVote,
  useDispatch,
  useSelector,
  voteCandidates,
} from "@/lib/redux";
import { VoteArtistArgs } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ICounteItem } from "../../_components/SingleCategoryRenderCandidate";

export const useSingleCategoryHook = (id: number) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [selected, setSelected] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [fingerPrint, setFingerPrint] = useState(0);
  const [countItem, setCountItem] = useState<ICounteItem>({
    count: null,
    percentage: null,
    candidateName: null,
  });

  const [shouldRefetch, setShouldRefetch] = useState(false);

  const identityState = useSelector((state) => state.identity.identity);
  const error = useSelector((state) => state.identity.error);
  const loading = useSelector((state) => state.identity.status);

  const {
    status,
    categoryDetail,
    error: categoryError,
  } = useSelector((state) => state.category);

  const ip = identityState.ip;
  const finger_print = identityState.fingerprint;

  const [vote, setVote] = useState<VoteArtistArgs>({
    ipAddress: ip,
    fingerprint: finger_print,
    categoryId: 0,
    candidateId: 0,
  });

  useEffect(() => {
    void dispatch(getVotersIpAddress());
    void dispatch(getSingleVoteCategory(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (shouldRefetch) {
      void dispatch(getSingleVoteCategory(id)); // Refetch data
      setShouldRefetch(false); // Reset state
    }
  }, [shouldRefetch, dispatch, id]);

  useEffect(() => {
    if (fingerPrint) {
      dispatch(setFingerprintVote(JSON.stringify(fingerPrint)));
    }
  }, [dispatch, fingerPrint]);

  useEffect(() => {
    if (error?.includes("You can only vote once per category!")) {
      setShowModal(true);
      dispatch(clearVotingState());
    }
  }, [error, identityState]);

  const voteCandidate = useCallback(() => {
    void dispatch(voteCandidates(vote));
    setShowModal(false);

    setTimeout(() => {
      setShouldRefetch(true);
    }, 2000);

    router.refresh();
  }, [vote]);

  return {
    setSelected,
    setImageUrl,
    setShowModal,
    setFingerPrint,
    setCountItem,
    setVote,
    voteCandidate,

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
  };
};
