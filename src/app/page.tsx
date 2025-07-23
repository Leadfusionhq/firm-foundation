'use client';

import BannerHome from "@/components/Layout/BannerHome/BannerHome";
import Build4Growth from "@/components/Layout/Build4Growth/Build4Growth";
import FaqHome from "@/components/Layout/FaqHome/FaqHome";
import HomeCtaBanner from "@/components/Layout/HomeCtaBanner/HomeCtaBanner";
import HomeServices from "@/components/Layout/HomeServices/HomeServices";
import WhyChoose from "@/components/Layout/WhyChoose/WhyChoose";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <BannerHome/>
   <Build4Growth/>
   <HomeServices/>
   <WhyChoose/>
   <HomeCtaBanner/>
   <FaqHome/>
   </>
  );
}
