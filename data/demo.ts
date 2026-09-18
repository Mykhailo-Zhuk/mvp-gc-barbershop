import type { Restaurant, Service } from "@/lib/schemas";

/**
 * GC Barbershop (Gentlemen's Club) — каталог послуг
 * Мережа барбершопів з 34 філіями по Україні. Класичні та модерн стрижки, оформлення борід, royal shaving. Атмосфера справжнього gentlemen's club.
 */

export const DEMO_RESTAURANT: Restaurant = {
  id: "gc-barbershop",
  name: "GC Barbershop (Gentlemen's Club)",
  description: "Мережа барбершопів з 34 філіями по Україні. Класичні та модерн стрижки, оформлення борід, royal shaving. Атмосфера справжнього gentlemen's club.",
  logo: "/images/demo-logo.svg",
  address: "Київ, проспект П. Григоренка, 22/20",
  phone: "+38 (068) 917-04-91",
  currency: "UAH",
  categories: [],
  items: [],
};

export const DEMO_SERVICES: Service[] = [
  {
    id: "choloichka-classic",
    name: "Чоловіча стрижка (класика)",
    description: "Консультація майстра, миття голови, класична стрижка з укладкою. Підбір стрижки під форму обличчя.",
    duration: 60,
    price: 450,
    provider: "GC Barbershop (Gentlemen's Club)",
    category: "barbershop",
    masterName: "Олександр Шевченко",
    available: true,
  },
  {
    id: "choloichka-modern",
    name: "Чоловіча стрижка (модерн)",
    description: "Сучасна стрижка з елементами модного стилю. Фейд, текстурування, креативні лінії.",
    duration: 75,
    price: 600,
    provider: "GC Barbershop (Gentlemen's Club)",
    category: "barbershop",
    masterName: "Дмитро Іваненко",
    available: true,
  },
  {
    id: "boroda-korolivska",
    name: "Оформлення борід (Royal)",
    description: "Професійне оформлення борід з гарячим рушником, бальзамом та олією. Підбір форми під обличчя.",
    duration: 45,
    price: 400,
    provider: "GC Barbershop (Gentlemen's Club)",
    category: "barbershop",
    masterName: "Олександр Шевченко",
    available: true,
  },
  {
    id: "golinnia-royalshave",
    name: "Гоління небезпечною бритвою",
    description: "Класичне гоління небезпечною бритвою з гарячим компресом. Royal Shave experience.",
    duration: 60,
    price: 600,
    provider: "GC Barbershop (Gentlemen's Club)",
    category: "barbershop",
    masterName: "Дмитро Іваненко",
    available: true,
  },
  {
    id: "kombo-classic",
    name: "Combo: стрижка + борода",
    description: "Класична стрижка + оформлення бороди. Найпопулярніша послуга мережі.",
    duration: 90,
    price: 750,
    provider: "GC Barbershop (Gentlemen's Club)",
    category: "barbershop",
    masterName: "Олександр Шевченко",
    available: true,
  },
  {
    id: "stylng-cholovicha",
    name: "Укладка чоловіча",
    description: "Укладка волосся професійними засобами. Для особливих подій та побачення.",
    duration: 30,
    price: 250,
    provider: "GC Barbershop (Gentlemen's Club)",
    category: "barbershop",
    masterName: "Дмитро Іваненко",
    available: true,
  },
  {
    id: "dityacha-stryzhka",
    name: "Дитяча стрижка (до 12 років)",
    description: "Терпляча та дружня стрижка для хлопчиків. Ігрова атмосфера, подарунок після.",
    duration: 45,
    price: 350,
    provider: "GC Barbershop (Gentlemen's Club)",
    category: "barbershop",
    masterName: "Олександр Шевченко",
    available: true,
  },
  {
    id: "dогляд-бороди",
    name: "Догляд за бородою",
    description: "Глибоке очищення, кондиціонування, підрізування, олія преміум-класу.",
    duration: 45,
    price: 350,
    provider: "GC Barbershop (Gentlemen's Club)",
    category: "barbershop",
    masterName: "Дмитро Іваненко",
    available: true,
  },
  {
    id: "karbon-blackmask",
    name: "Карбонова маска для обличчя",
    description: "Очищаюча карбонова маска для обличчя. Детокс, звуження пор, anti-age ефект.",
    duration: 45,
    price: 500,
    provider: "GC Barbershop (Gentlemen's Club)",
    category: "spa",
    masterName: "Барбер-стиліст",
    available: true,
  }
];

export const ADMIN_LOG = [
  {
    id: "l1",
    timestamp: "2026-09-17T10:23:11Z",
    level: "info" as const,
    message: "Booking created: gc-barbershop service",
  },
  {
    id: "l2",
    timestamp: "2026-09-17T09:18:42Z",
    level: "success" as const,
    message: "Booking confirmed: gc-barbershop",
  },
];
