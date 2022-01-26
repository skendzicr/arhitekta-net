import { FC } from "react";

const FeaturesSection: FC<{}> = ({}) => {
  return (
    <section className="bg-white" style={{ contentVisibility: "hidden" }}>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 ">
        <div className="lg:text-center">
          <h2
            className="text-base text-yellow-600 font-semibold tracking-wide uppercase"
            id="usluge"
          >
            Usluge
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Šta možemo da učinimo za vas?
          </p>
        </div>
        <div className="flex items-center flex-wrap my-20">
          <div className="w-full md:w-1/4 order-1 md:order-none">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              3D modeling
            </h4>
            <p className="text-gray-600 mb-8">
              Izrada fotorealističnih 3D modela, kako biste na najjeftiniji
              način proverili sve potencijalne odluke koje želite da sprovedete
              u vašem domu.
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-3 order-1 md:order-none">
            <img
              src="assets/svg/3d-modeling.svg"
              alt="3d Modeling"
              loading="lazy"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full md:w-1/4 order-2 md:order-none">
            <img
              src="assets/svg/idejno-resenje.svg"
              alt="Idejno resenje"
              loading="lazy"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full md:w-1/4 md:pl-10 order-1 md:order-none ">
            <h4 className="text-3xl text-gray-800 font-bold my-3">
              Idejno rešenje
            </h4>
            <p className="text-gray-600">
              Kao rezultat izrade Idejnog rešenja (IDR), dobijaju se sledeći
              grafički prilozi: šira i uža situacija objekta, osnove svih
              karakteritičnih etaža i krova, karakteristični preseci objekta i
              prikazi svih izgleda objekta u odgovarajućoj razmeri.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/4 order-1 md:order-none">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Dizajn enterijera
            </h4>
            <p className="text-gray-600 mb-8">
              Želite da promenite kako izgleda vaš dom? Hoćete da imate unikatan
              komad nameštaja? Rešavamo vaše nedoumice i zajedno pronalazimo
              najbolje rešenje za vaš dom.
            </p>
          </div>

          <div className="w-full md:w-1/4 order-1 md:order-none">
            <img
              src="assets/svg/dizajn-enterijera.svg"
              alt="Dizajn enterijera"
              loading="lazy"
              width={300}
              height={300}
            />
          </div>

          <div className="w-full md:w-1/4 order-2 md:order-none">
            <img
              src="assets/svg/projektovanje-objekata.svg"
              alt="Projektovanje objekata"
              loading="lazy"
              width={300}
              height={300}
            />
          </div>

          <div className="w-full md:w-1/4 md:pl-10 order-1 md:order-none">
            <h4 className="text-3xl text-gray-800 font-bold my-3">
              Projektovanje objekata
            </h4>
            <p className="text-gray-600 mb-8">
              Izrada fotorealističnih 3D modela, kako biste na najjeftiniji
              način proverili sve potencijalne odluke koje želite da sprovedete
              u vašem domu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
