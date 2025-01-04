import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

const NewYearSale = async () => {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.NYR);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-red-600 to-black text-white text-center px-6 py-10 mt-2 rounded-lg shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-left mb-4">
            {sale.title}
          </h2>
          <p className="text-left text-xl sm:text-2xl font-semibold mb-6">
            {sale.description}
          </p>

          <div className="flex">
            <div className="bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
              <span className="font-bold text-base sm:text-lg">
                Use code {sale.couponCode}
                <span className="ml-2 font-bold text-base sm:text-lg">
                  for {sale.discountAmount}% OFF
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewYearSale;
