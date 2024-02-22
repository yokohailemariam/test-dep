export interface VoteType {
  identity: IdentityType
  status: "idle" | "loading" | "rejected"
  error: string | undefined
  voteResult: string
}

export interface HomeCategory {
  items: HomeCategoryResType[]
  voteResult: VoteResultCategory[]
  status: "idle" | "loading" | "rejected"
  error: string | undefined
}

export interface Category {
  categoryDetail: HomeCategoryResType
  status: "idle" | "loading" | "rejected"
  error: string | undefined
  items: Result[]
}

export interface VoteOptionsType {
  title: string
  paragraph: string
  artists: VoteListType[]
}

export interface VoteListType {
  id?: number
  name: string
}

export interface ArtistCardType {
  id?: number
  title: string
  image: string
}

export interface CategoryType {
  id?: number
  title: string
  imageUrl: string
}

export interface IdentityType {
  ip: string
  fingerprint: string
}

export interface GetIpResponseType {
  ip: string
}

export interface VoteCategoriesResponseType {
  id: number
  category_name: string
  category_description: string
  category_coverImage: string
  is_top_category: boolean
  encoder_ID: string
  created_at: string
  updated_at: string
}

export interface HomeCategoryResType {
  id: number
  candidates: Candidate[]
  category_name: string
  category_description: string
  category_coverImage: string
  is_top_category: boolean
  encoder_ID: string
  created_at: string
  updated_at: string
}

export interface Candidate {
  id: number
  candidate_name: string
  candidate_description: string
  candidate_profileImage: string
  encoder_ID: string
  created_at: string
  updated_at: string
  category: number[]
  vote_count_in_the_category: number
  vote_percentage_in_the_category: number
}

export interface VoteArtistArgs {
  ipAddress: string
  fingerprint: string
  categoryId: number
  candidateId: number
}

export interface GetIPResponse {
  ip: string
}

export interface VoteResultCategory {
  id: number
  candidates: VoteResultCandidate[]
  category_vote_count: number
  vote_percentage: number
  category_name: string
  category_description: string
  category_coverImage: string
  is_top_category: boolean
  encoder_ID: string
  created_at: string
  updated_at: string
}

export interface VoteResultCandidate {
  id: number
  candidate_name: string
  candidate_description: string
  candidate_profileImage: string
  encoder_ID: string
  created_at: string
  updated_at: string
  category: number[]
  vote_count_in_the_category: number
  vote_percentage_in_the_category: number
}

// new type

export interface HomeCategoryState {
  items: HomeCategoryItemRes[]
  voteResult: VoteResultCategory[]
  status: "idle" | "loading" | "rejected"
  error: string | undefined
}

export interface HomeCategoryNew {
  count: number
  next: string
  previous?: any
  results: Result[]
}

export interface Result {
  id: number
  candidates: Candidate[]
  category_vote_count: number
  vote_percentage: number
  category_name: string
  category_description: string
  category_coverImage: string
  is_top_category: boolean
  encoder_ID: string
  created_at: string
  updated_at: string
}

export interface CandidateNew {
  id: number
  candidate_name: string
  candidate_description: string
  candidate_profileImage: string
  encoder_ID: string
  created_at: string
  updated_at: string
  category: number[]
  vote_count_in_the_category: number
  vote_percentage_in_the_category: number
}

export interface HomeCategoryItemRes {
  id: number
  category_name: string
  category_description: string
  category_coverImage: string
  is_top_category: boolean
  encoder_ID: string
  created_at: string
  updated_at: string
}

export interface HomeCategoryRes {
  count: number
  next: string
  previous?: any
  results: HomeCategoryItemRes[]
}
