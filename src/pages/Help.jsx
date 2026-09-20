import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const HelpSupport = () => {

    const [language, setLanguage] = useState("english");

    const isUrdu = language === "urdu";

    const content = {

        english: {
            badge: "ALU PRO",
            title: "Help & Support",
            subtitle:
                "Everything you need to know about using ALU PRO and placing your order.",

            language: "Language",

            introTitle: "How can we help?",
            introText:
                "Follow the simple steps below to browse products, book services and place your aluminium order.",

            stepsTitle: "How to Place an Order",

            steps: [
                {
                    icon: "fa-box-open",
                    title: "1. Browse Products",
                    text:
                        "Open the Products page and explore available aluminium windows, doors, kitchens, partitions and other products."
                },
                {
                    icon: "fa-cart-shopping",
                    title: "2. Select Your Product",
                    text:
                        "Choose the product you want and click the Order Now button."
                },
                {
                    icon: "fa-ruler-combined",
                    title: "3. Enter Measurements",
                    text:
                        "Enter the required width, height and quantity. Make sure your measurements are accurate."
                },
                {
                    icon: "fa-palette",
                    title: "4. Choose Details",
                    text:
                        "Select the required colour, glass type and add any special instructions or notes."
                },
                {
                    icon: "fa-user",
                    title: "5. Check Your Details",
                    text:
                        "Make sure your name, phone number and other customer information are correct."
                },
                {
                    icon: "fa-paper-plane",
                    title: "6. Submit Order",
                    text:
                        "Submit your order. Your order will be saved and our team can review it."
                }
            ],

            serviceTitle: "How to Book a Service",

            serviceSteps: [
                {
                    icon: "fa-screwdriver-wrench",
                    title: "Choose a Service",
                    text:
                        "Open the Services page and select the aluminium service you need."
                },
                {
                    icon: "fa-calendar-check",
                    title: "Book Service",
                    text:
                        "Click Book Service and provide the requested customer information."
                },
                {
                    icon: "fa-clipboard-check",
                    title: "Submit Request",
                    text:
                        "Submit your service request. Our team can review your requirements and contact you."
                }
            ],

            accountTitle: "Your Account",

            accountItems: [
                {
                    icon: "fa-user-pen",
                    title: "Edit Profile",
                    text:
                        "Open your Profile page to update your username, email and phone number."
                },
                {
                    icon: "fa-camera",
                    title: "Profile Photo",
                    text:
                        "You can upload or remove your profile photo from the Profile page."
                },
                {
                    icon: "fa-clock-rotate-left",
                    title: "My Orders",
                    text:
                        "Open My Orders to check your submitted orders and their current status."
                }
            ],

            statusTitle: "Order Status",

            statuses: [
                {
                    status: "Pending",
                    text:
                        "Your order has been submitted and is waiting for review."
                },
                {
                    status: "Confirmed",
                    text:
                        "Your order has been reviewed and confirmed."
                },
                {
                    status: "Completed",
                    text:
                        "Your order has been completed."
                },
                {
                    status: "Cancelled",
                    text:
                        "The order has been cancelled."
                }
            ],

            tipsTitle: "Important Tips",

            tips: [
                "Enter correct width and height measurements.",
                "Provide an active phone number.",
                "Check your product, colour and glass selection before submitting.",
                "Add important requirements in the notes field.",
                "Keep checking My Orders for updates.",
                "Contact ALU PRO if you need help with your order."
            ],

            faqTitle: "Frequently Asked Questions",

            faqs: [
                {
                    q: "Do I need an account to place an order?",
                    a:
                        "Yes. Login to your ALU PRO account before placing an order."
                },
                {
                    q: "Can I order windows and doors?",
                    a:
                        "Yes. Available products are shown on the Products page."
                },
                {
                    q: "Can I book installation services?",
                    a:
                        "Yes. Open the Services page and select the required service."
                },
                {
                    q: "How can I check my order?",
                    a:
                        "Open My Orders from your account to check your order status."
                },
                {
                    q: "What if I entered the wrong information?",
                    a:
                        "Contact ALU PRO support as soon as possible with your order details."
                }
            ],

            contactTitle: "Need More Help?",
            contactText:
                "If you cannot find the answer you need, contact ALU PRO directly.",

            call: "Call ALU PRO",
            whatsapp: "WhatsApp",

            backHome: "Back to Home"
        },


        urdu: {

            badge: "ALU PRO",
            title: "مدد اور سپورٹ",
            subtitle:
                "ALU PRO استعمال کرنے اور آرڈر دینے کے بارے میں مکمل رہنمائی۔",

            language: "زبان",

            introTitle: "ہم آپ کی کیسے مدد کر سکتے ہیں؟",
            introText:
                "نیچے دیے گئے آسان مراحل کو فالو کرکے آپ پروڈکٹس دیکھ سکتے ہیں، سروس بک کر سکتے ہیں اور ایلومینیم کا آرڈر دے سکتے ہیں۔",

            stepsTitle: "آرڈر کیسے کریں؟",

            steps: [
                {
                    icon: "fa-box-open",
                    title: "1. پروڈکٹس دیکھیں",
                    text:
                        "Products پیج کھولیں اور ایلومینیم ونڈوز، دروازے، کچن، پارٹیشنز اور دیگر دستیاب پروڈکٹس دیکھیں۔"
                },
                {
                    icon: "fa-cart-shopping",
                    title: "2. پروڈکٹ منتخب کریں",
                    text:
                        "اپنی مطلوبہ پروڈکٹ منتخب کریں اور Order Now کے بٹن پر کلک کریں۔"
                },
                {
                    icon: "fa-ruler-combined",
                    title: "3. پیمائش درج کریں",
                    text:
                        "ضروری Width، Height اور Quantity درج کریں۔ پیمائش درست درج کریں۔"
                },
                {
                    icon: "fa-palette",
                    title: "4. تفصیلات منتخب کریں",
                    text:
                        "اپنا رنگ، شیشہ اور دوسری ضروری تفصیلات منتخب کریں۔ اضافی ہدایات Notes میں لکھ سکتے ہیں۔"
                },
                {
                    icon: "fa-user",
                    title: "5. اپنی معلومات چیک کریں",
                    text:
                        "اپنا نام، فون نمبر اور دوسری کسٹمر معلومات درست ہونے کا یقین کریں۔"
                },
                {
                    icon: "fa-paper-plane",
                    title: "6. آرڈر جمع کریں",
                    text:
                        "اپنا آرڈر Submit کریں۔ آپ کا آرڈر محفوظ ہوجائے گا اور ہماری ٹیم اسے دیکھ سکے گی۔"
                }
            ],

            serviceTitle: "سروس کیسے بک کریں؟",

            serviceSteps: [
                {
                    icon: "fa-screwdriver-wrench",
                    title: "سروس منتخب کریں",
                    text:
                        "Services پیج کھولیں اور اپنی مطلوبہ ایلومینیم سروس منتخب کریں۔"
                },
                {
                    icon: "fa-calendar-check",
                    title: "سروس بک کریں",
                    text:
                        "Book Service پر کلک کریں اور مطلوبہ کسٹمر معلومات درج کریں۔"
                },
                {
                    icon: "fa-clipboard-check",
                    title: "درخواست جمع کریں",
                    text:
                        "اپنی سروس درخواست Submit کریں۔ ہماری ٹیم آپ کی ضرورت دیکھ کر آپ سے رابطہ کر سکتی ہے۔"
                }
            ],

            accountTitle: "آپ کا اکاؤنٹ",

            accountItems: [
                {
                    icon: "fa-user-pen",
                    title: "پروفائل ایڈٹ کریں",
                    text:
                        "Profile پیج کھول کر اپنا username، email اور phone number تبدیل کریں۔"
                },
                {
                    icon: "fa-camera",
                    title: "پروفائل فوٹو",
                    text:
                        "Profile پیج سے اپنی پروفائل فوٹو upload یا remove کر سکتے ہیں۔"
                },
                {
                    icon: "fa-clock-rotate-left",
                    title: "میرے آرڈرز",
                    text:
                        "My Orders میں اپنے آرڈرز اور ان کا موجودہ status دیکھ سکتے ہیں۔"
                }
            ],

            statusTitle: "آرڈر اسٹیٹس",

            statuses: [
                {
                    status: "Pending",
                    text:
                        "آپ کا آرڈر جمع ہوگیا ہے اور review کا انتظار کر رہا ہے۔"
                },
                {
                    status: "Confirmed",
                    text:
                        "آپ کا آرڈر review کرکے confirm کردیا گیا ہے۔"
                },
                {
                    status: "Completed",
                    text:
                        "آپ کا آرڈر مکمل ہوگیا ہے۔"
                },
                {
                    status: "Cancelled",
                    text:
                        "آپ کا آرڈر cancel کردیا گیا ہے۔"
                }
            ],

            tipsTitle: "اہم ہدایات",

            tips: [
                "Width اور Height کی درست پیمائش درج کریں۔",
                "فعال فون نمبر ضرور دیں۔",
                "Submit کرنے سے پہلے پروڈکٹ، رنگ اور شیشے کی selection چیک کریں۔",
                "ضروری ہدایات Notes میں لکھیں۔",
                "Updates کے لیے My Orders چیک کرتے رہیں۔",
                "آرڈر کے بارے میں مدد چاہیے تو ALU PRO سے رابطہ کریں۔"
            ],

            faqTitle: "عام سوالات",

            faqs: [
                {
                    q: "کیا آرڈر دینے کے لیے اکاؤنٹ ضروری ہے؟",
                    a:
                        "جی ہاں۔ آرڈر دینے سے پہلے اپنے ALU PRO اکاؤنٹ میں Login کریں۔"
                },
                {
                    q: "کیا میں ونڈوز اور دروازے آرڈر کرسکتا ہوں؟",
                    a:
                        "جی ہاں۔ دستیاب پروڈکٹس Products پیج پر دکھائی جائیں گی۔"
                },
                {
                    q: "کیا میں installation service بک کرسکتا ہوں؟",
                    a:
                        "جی ہاں۔ Services پیج کھول کر اپنی مطلوبہ سروس منتخب کریں۔"
                },
                {
                    q: "میں اپنا آرڈر کیسے چیک کروں؟",
                    a:
                        "اپنے اکاؤنٹ سے My Orders کھولیں اور آرڈر کا status دیکھیں۔"
                },
                {
                    q: "اگر میں نے غلط معلومات درج کردی ہوں تو؟",
                    a:
                        "اپنے آرڈر کی معلومات کے ساتھ جلد از جلد ALU PRO support سے رابطہ کریں۔"
                }
            ],

            contactTitle: "مزید مدد چاہیے؟",

            contactText:
                "اگر آپ کو مطلوبہ جواب نہیں ملا تو براہ راست ALU PRO سے رابطہ کریں۔",

            call: "ALU PRO کو کال کریں",
            whatsapp: "واٹس ایپ",

            backHome: "ہوم پر واپس جائیں"
        }
    };


    const t = isUrdu
        ? content.urdu
        : content.english;


    const phoneNumber = "+923112889906";
    const whatsappNumber = "923112889906";


    return (
        <div
            dir={isUrdu ? "rtl" : "ltr"}
            className="min-h-screen bg-[#121212] text-white"
        >

            {/* ================= HEADER ================= */}

            <section className="bg-[#0d0d0d] border-b border-white/10">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">

                        <div>

                            <p className="text-[#ff7700] text-sm font-semibold tracking-[0.2em] uppercase">
                                <img
                                    src={Logo}
                                    alt="ALU PRO Logo"
                                    className="h-9 sm:h-4 md:h-14 w-auto max-w-[180px] object-contain transition duration-300 hover:scale-105"
                                />
                                {t.badge}
                            </p>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                                {t.title}
                            </h1>

                            <p className="text-gray-400 max-w-2xl mt-4 leading-7">
                                {t.subtitle}
                            </p>

                        </div>


                        {/* LANGUAGE SWITCH */}

                        <div className="shrink-0">

                            <p className="text-gray-500 text-xs mb-2">
                                {t.language}
                            </p>

                            <div className="flex items-center bg-[#1c1c1c] border border-[#333] rounded-full p-1">

                                <button
                                    onClick={() =>
                                        setLanguage("english")
                                    }
                                    className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all ${!isUrdu
                                            ? "bg-[#ff7700] text-white "
                                            : "text-gray-400 hover:text-white "
                                        }`}
                                >
                                    English
                                </button>

                                <button
                                    onClick={() =>
                                        setLanguage("urdu")
                                    }
                                    className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all ${isUrdu
                                            ? "bg-[#ff7700] text-white"
                                            : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    اردو
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= INTRO ================= */}

            <section className="py-10">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                    <div className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl p-6 sm:p-8">

                        <div className="flex items-start gap-5">

                            <div className="w-14 h-14 shrink-0 rounded-xl bg-orange-500/10 flex items-center justify-center">

                                <i className="fa-solid fa-circle-question text-2xl text-[#ff7700]"></i>

                            </div>

                            <div>

                                <h2 className="text-2xl font-bold">
                                    {t.introTitle}
                                </h2>

                                <p className="text-gray-400 leading-7 mt-2">
                                    {t.introText}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= ORDER STEPS ================= */}

            <section className="pb-12">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                        {t.stepsTitle}
                    </h2>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        {t.steps.map((step, index) => (

                            <div
                                key={index}
                                className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl p-6 hover:border-[#ff7700]/40 transition-all"
                            >

                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">

                                    <i
                                        className={`fa-solid ${step.icon} text-[#ff7700] text-lg`}
                                    ></i>

                                </div>

                                <h3 className="text-lg font-semibold mt-5">
                                    {step.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-6 mt-3">
                                    {step.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= SERVICES ================= */}

            <section className="pb-12">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                        {t.serviceTitle}
                    </h2>


                    <div className="grid md:grid-cols-3 gap-5">

                        {t.serviceSteps.map((step, index) => (

                            <div
                                key={index}
                                className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl p-6"
                            >

                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">

                                    <i
                                        className={`fa-solid ${step.icon} text-[#ff7700]`}
                                    ></i>

                                </div>

                                <h3 className="font-semibold text-lg mt-5">
                                    {step.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-6 mt-3">
                                    {step.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= ACCOUNT ================= */}

            <section className="pb-12">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                        {t.accountTitle}
                    </h2>


                    <div className="grid md:grid-cols-3 gap-5">

                        {t.accountItems.map((item, index) => (

                            <div
                                key={index}
                                className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl p-6"
                            >

                                <i
                                    className={`fa-solid ${item.icon} text-[#ff7700] text-xl`}
                                ></i>

                                <h3 className="font-semibold text-lg mt-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-6 mt-2">
                                    {item.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= ORDER STATUS ================= */}

            <section className="pb-12">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                        {t.statusTitle}
                    </h2>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        {t.statuses.map((item, index) => (

                            <div
                                key={index}
                                className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl p-5"
                            >

                                <span className="inline-flex px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ff7700] text-xs font-semibold">
                                    {item.status}
                                </span>

                                <p className="text-gray-400 text-sm leading-6 mt-4">
                                    {item.text}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= TIPS ================= */}

            <section className="pb-12">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                    <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 sm:p-8">

                        <div className="flex items-center gap-3">

                            <i className="fa-solid fa-lightbulb text-[#ff7700] text-xl"></i>

                            <h2 className="text-2xl font-bold">
                                {t.tipsTitle}
                            </h2>

                        </div>


                        <div className="grid sm:grid-cols-2 gap-4 mt-6">

                            {t.tips.map((tip, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >

                                    <i className="fa-solid fa-check text-[#ff7700] mt-1"></i>

                                    <p className="text-gray-400 text-sm leading-6">
                                        {tip}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FAQ ================= */}

            <section className="pb-12">

                <div className="max-w-4xl mx-auto px-5 sm:px-8">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                        {t.faqTitle}
                    </h2>


                    <div className="space-y-4">

                        {t.faqs.map((faq, index) => (

                            <details
                                key={index}
                                className="group bg-[#1c1c1c] border border-[#2d2d2d] rounded-xl overflow-hidden"
                            >

                                <summary className="cursor-pointer list-none px-5 py-5 font-semibold flex items-center justify-between gap-4">

                                    <span>
                                        {faq.q}
                                    </span>

                                    <i className="fa-solid fa-chevron-down text-[#ff7700] group-open:rotate-180 transition-transform"></i>

                                </summary>

                                <div className="px-5 pb-5">

                                    <p className="text-gray-400 text-sm leading-6">
                                        {faq.a}
                                    </p>

                                </div>

                            </details>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= CONTACT ================= */}

            <section className="pb-14">

                <div className="max-w-4xl mx-auto px-5 sm:px-8">

                    <div className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl p-6 sm:p-8 text-center">

                        <div className="w-14 h-14 mx-auto rounded-xl bg-orange-500/10 flex items-center justify-center">

                            <i className="fa-solid fa-headset text-2xl text-[#ff7700]"></i>

                        </div>

                        <h2 className="text-2xl font-bold mt-5">
                            {t.contactTitle}
                        </h2>

                        <p className="text-gray-400 mt-3">
                            {t.contactText}
                        </p>


                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-7">

                            <a
                                href={`tel:${phoneNumber}`}
                                className="inline-flex items-center justify-center gap-2 bg-[#ff7700] hover:bg-[#e66b00] px-6 py-3 rounded-xl font-semibold transition-all"
                            >

                                <i className="fa-solid fa-phone"></i>

                                {t.call}

                            </a>


                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-[#ff7700] text-[#ff7700] hover:bg-[#ff7700] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all"
                            >

                                <i className="fa-brands fa-whatsapp text-lg"></i>

                                {t.whatsapp}

                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= HOME ================= */}

            <div className="text-center pb-12">

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 cursor-pointer text-gray-400 hover:text-[#ff7700] transition-all"
                >

                    <i className="fa-solid fa-arrow-left"></i>

                    {t.backHome}

                </Link>

            </div>

        </div>
    );
};

export default HelpSupport;