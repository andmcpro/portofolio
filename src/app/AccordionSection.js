"use client";
import React from "react";
import AccordionItem from "./AccordionItem";

const AccordionSection = () => {
  return (
    <section className="flex flex-col gap-12 items-center p-16 bg-stone-50 max-sm:px-4 max-sm:py-8">
      <header className="text-center">
        <h2 className="text-2xl font-bold text-stone-900">Tentang Saya</h2>
        <p className="mt-2 text-xl text-neutral-500"></p>
      </header>
      <div className="flex flex-col gap-4 w-full max-w-screen-sm">
        <AccordionItem
          title="About Me"
          content=" &nbsp;&nbsp; Saya seorang yang telah menyelesaiakan
                    perkuliahan di Universitas Putra Indonesia YPTK
                    Padang, saya merupakan seorang yang selalu
                    termotivasi untuk mencoba hal baru, serta memiliki
                    ketertarikan terhadapat dunia digital yang
                    berkembang pesat pada saat ini, serta berfikir kritis
                    dan kreatif."
          defaultExpanded={true}
        />
        <AccordionItem
          title="Pendidikan"
          content={
            <>
              <p>
                &nbsp;&nbsp; Saya menyelesaikan studi S1 Teknik Informatika di
                Universitas Putra Indonesia YPTK pada tahun 2024 dengan IPK
                3.59. Selama kuliah, saya mengembangkan keterampilan di bidang
                teknologi informasi dan komputer, serta memperdalam pemahaman
                tentang berbagai aspek teknik informatika.
              </p>
              <br></br>
              <p>
                &nbsp;&nbsp; Sebelumnya, saya menempuh pendidikan di SMAN 1
                Lubuk Basung pada jurusan MIPA dari tahun 2017 hingga 2020, yang
                memberikan dasar yang kuat dalam matematika dan ilmu pengetahuan
                alam, yang mendukung pengembangan kemampuan analitis saya di
                bidang teknik informatika.
              </p>
            </>
          }
        />
        {/* {[...Array(4)].map((_, index) => (
          <AccordionItem key={index} title="Title" content="" />
        ))} */}
      </div>
    </section>
  );
};

export default AccordionSection;
