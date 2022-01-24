import "./App.css";
import { Header } from "./components/header/Header";
import { HeaderCard } from "./components/hoc/headerCard/HeaderCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filter from "./components/filter/Filter";
import JobHeader from "./components/jobHeader/JobHeader";
import { Jobs } from "./components/jobs/Jobs";
import JobCard from "./components/jobCard/JobCard";
import React, { useState } from "react";
import ThemeContext from "./context/theme-context";

function App() {
  const [isDark, setIsDark] = useState(false);
  const value = { isDark, setIsDark };

  const [filterData, setFilterData] = useState({
    search: "",
    location: "",
    time: "",
  });
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={value}>
        <div className={`App ${isDark ? "dark" : "light"}`}>
          <Header></Header>
          <HeaderCard>
            <Routes>
              <Route
                path="/"
                element={<Filter dataFunction={setFilterData} />}
              />
              <Route path="/job/:id" element={<JobHeader />} />
            </Routes>
          </HeaderCard>
          <Routes>
            <Route path="/" element={<Jobs filterData={filterData} />} />
            <Route path="/job/:id" element={<JobCard />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
