"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight, Sparkles, CalendarDays, Wallet, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/components/theme-toggle").then((m) => m.ThemeToggle), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent dark:from-indigo-900/20" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span>GC Barbershop</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/admin">Адмін</Link>
          </Button>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-12 text-center sm:pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
            <Sparkles className="h-3 w-3" />
            MVP демо · Next.js 14
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Gentlemen&apos;s Club — Мережа з 34 філій по Україні
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-zinc-600 dark:text-zinc-400">
            Класичні та модерн стрижки, оформлення борід, Royal Shave. Атмосфера справжнього gentlemen&apos;s club.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />Київ, просп. П. Григоренка, 22/20 (2 філії в Києві)</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />Щодня 10:00-21:00</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="tel:+38(068)9170491" className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+38 (068) 917-04-91</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/book/quick" className="inline-flex items-center gap-2">
                <CalendarDays className="h-5 w-5 flex-shrink-0" />
                <span>Записатись онлайн</span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </Link>
            </Button>
          </div>
          <div className="mt-3 text-sm text-zinc-500"></div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Наші послуги</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/book/choloichka-classic" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Чоловіча стрижка (класика)</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Консультація, миття, класична стрижка з укладкою.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                <Wallet className="h-4 w-4 flex-shrink-0" />
                450 ₴
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                <CalendarPlus className="h-3.5 w-3.5 flex-shrink-0" />
                Записатись
              </span>
            </div>
          </Link>
          <Link href="/book/choloichka-modern" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Чоловіча стрижка (модерн)</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Сучасна стрижка з фейдом та текстуруванням.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                <Wallet className="h-4 w-4 flex-shrink-0" />
                600 ₴
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                <CalendarPlus className="h-3.5 w-3.5 flex-shrink-0" />
                Записатись
              </span>
            </div>
          </Link>
          <Link href="/book/boroda-korolivska" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Оформлення борід (Royal)</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Професійне оформлення з гарячим рушником.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                <Wallet className="h-4 w-4 flex-shrink-0" />
                400 ₴
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                <CalendarPlus className="h-3.5 w-3.5 flex-shrink-0" />
                Записатись
              </span>
            </div>
          </Link>
          <Link href="/book/golinnia-royalshave" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Гоління небезпечною бритвою</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Royal Shave experience з гарячим компресом.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                <Wallet className="h-4 w-4 flex-shrink-0" />
                600 ₴
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                <CalendarPlus className="h-3.5 w-3.5 flex-shrink-0" />
                Записатись
              </span>
            </div>
          </Link>
          <Link href="/book/kombo-classic" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Combo: стрижка + борода</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Найпопулярніша послуга мережі.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                <Wallet className="h-4 w-4 flex-shrink-0" />
                750 ₴
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                <CalendarPlus className="h-3.5 w-3.5 flex-shrink-0" />
                Записатись
              </span>
            </div>
          </Link>
          <Link href="/book/stylng-cholovicha" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Укладка чоловіча</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Укладка для особливих подій та побачення.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                <Wallet className="h-4 w-4 flex-shrink-0" />
                250 ₴
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                <CalendarPlus className="h-3.5 w-3.5 flex-shrink-0" />
                Записатись
              </span>
            </div>
          </Link>
          <Link href="/book/dityacha-stryzhka" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Дитяча стрижка</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Терпляча стрижка для хлопчиків до 12 років.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                <Wallet className="h-4 w-4 flex-shrink-0" />
                350 ₴
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                <CalendarPlus className="h-3.5 w-3.5 flex-shrink-0" />
                Записатись
              </span>
            </div>
          </Link>
          <Link href="/book/doglяd-borody" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Догляд за бородою</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Глибоке очищення, кондиціонування, олія преміум.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                <Wallet className="h-4 w-4 flex-shrink-0" />
                350 ₴
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                <CalendarPlus className="h-3.5 w-3.5 flex-shrink-0" />
                Записатись
              </span>
            </div>
          </Link>
          <Link href="/book/karbon-blackmask" className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-lg font-semibold">Карбонова маска</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Детокс, звуження пор, anti-age ефект.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xl font-bold text-indigo-600 dark:text-indigo-400">
                <Wallet className="h-4 w-4 flex-shrink-0" />
                500 ₴
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                <CalendarPlus className="h-3.5 w-3.5 flex-shrink-0" />
                Записатись
              </span>
            </div>
          </Link>
        </div>
      </section>

      <footer className="relative z-10 border-t border-zinc-200 py-8 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        <div className="mx-auto max-w-6xl px-6">
          MVP by <a href="https://t.me/Zhuk_Mykhailo" className="text-indigo-600 hover:underline dark:text-indigo-400">Mykhailo Zhuk</a> · Next.js 14 · MIT License
        </div>
      </footer>
    </main>
  );
}
