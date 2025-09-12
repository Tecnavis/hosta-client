"use client";

import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { useAppContext } from "@/context/AppContext";

const Page = () => {
  const { search, setSearch, filter, setFilter } = useAppContext();

  return (
    <>
      <HeroSub
        title="Book Direct"
        description="Contact trusted owners directly without middlemen"
      />
      <PropertiesListing filter={filter} search={search} />
    </>
  );
};

export default Page;
