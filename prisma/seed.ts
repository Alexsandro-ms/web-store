const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl: "https://i.ibb.co/PY3MYMD/Logitech-Pro-X-Superlight-topo.webp",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/1nKq7YR/Logitech-MX-Master-3s-totalmente-esquerdo.webp",
          "https://i.ibb.co/RDTsnkf/Logitech-MX-Master-3s-lado-esquerdo.webp",
          "https://i.ibb.co/jyc8ZdQ/Logitech-MX-Master-3s-baixo.webp",
          "https://i.ibb.co/khPdzHG/Logitech-MX-Master-3s-cima.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/PY3MYMD/Logitech-Pro-X-Superlight-topo.webp",
          "https://i.ibb.co/NWPy4Xw/Logitech-Pro-X-Superlight-direito.webp",
          "https://i.ibb.co/pvRxdWk/Logitech-Pro-X-Superlight-baixo.webp",
          "https://i.ibb.co/txh0KSp/Logitech-Pro-X-Superlight.webp",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercent: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/4YYV0Vn/Logitech-G305-Lightspeed-baixo.webp",
          "https://i.ibb.co/RDjNhqS/Logitech-G305-Lightspeed-diagonal.webp",
          "https://i.ibb.co/2tSZZFw/Logitech-G305-Lightspeed-lado-esquerdo.webp",
          "https://i.ibb.co/yXDmX7w/Logitech-G305-Lightspeed-topo.webp",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercent: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/HCZV3d2/Hyperx-Pulsefire-Dart-diagonal.webp",
          "https://i.ibb.co/mt7yc7B/Hyperx-Pulsefire-Dart-lado-esquerdo.webp",
          "https://i.ibb.co/mqnLt64/Hyperx-Pulsefire-Dart-topo.webp",
          "https://i.ibb.co/3rWyVFr/Hyperx-Pulsefire-Dart-topo-t.webp",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercent: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl: "https://i.ibb.co/YW3crpB/Logitech-MX-Mechanical-Frontal.webp",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/QbT72mt/longitech-mx-keys-mini-diagonla.webp",
          "https://i.ibb.co/p0bY9bF/longitech-mx-keys-mini-frente.webp",
          "https://i.ibb.co/VCFKq5p/longitech-mx-keys-mini-lateral.webp",
          "https://i.ibb.co/1mT3wS7/longitech-mx-keys-mini-tras.webp",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/gvGFjgr/Logitech-MX-Keys-S-diagonal.webp",
          "https://i.ibb.co/VjFnbs8/Logitech-MX-Keys-S-frontal.webp",
          "https://i.ibb.co/z4Gmsh6/Logitech-MX-Keys-S-lateral.webp",
          "https://i.ibb.co/S04B58X/Logitech-MX-Keys-S-traseiro.webp",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/BZcG42p/Logitech-Pop-Keys-frontal.webp",
          "https://i.ibb.co/LDywsvP/Logitech-Pop-Keys-diagonal.webp",
          "https://i.ibb.co/gMxJ4PR/Logitech-Pop-Keys-lateral.webp",
          "https://i.ibb.co/TvZRs6D/Logitech-Pop-Keys-traseira.webp",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/YW3crpB/Logitech-MX-Mechanical-Frontal.webp",
          "https://i.ibb.co/fvG9FwW/Logitech-MX-Mechanical-Diagonal.webp",
          "https://i.ibb.co/286M5hK/Logitech-MX-Mechanical-Lateral.webp",
          "https://i.ibb.co/ZfCKRRm/Logitech-MX-Mechanical-Traseira.webp",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercent: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/7j3nYfX/Epomaker-TH80-Diagonal.webp",
          "https://i.ibb.co/Yh8RgnL/Epomaker-TH80-frontal.webp",
          "https://i.ibb.co/5jm98pw/Epomaker-TH80-lateral.webp",
          "https://i.ibb.co/X2dH4PB/Epomaker-TH80-traseira.webp",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercent: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl: "https://i.ibb.co/QH6BhKK/Logitech-Zone-Vibe-100-Frontal.webp",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/QH6BhKK/Logitech-Zone-Vibe-100-Frontal.webp",
          "https://i.ibb.co/HF231gW/Logitech-Zone-Vibe-100-Diagonal-Frontal.webp",
          "https://i.ibb.co/mz72Jyy/Logitech-Zone-Vibe-100-Lateral.webp",
          "https://i.ibb.co/rtHH7N3/Logitech-Zone-Vibe-100-Traseira.webp",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercent: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl: "https://i.ibb.co/txNfjDM/Logitech-Powerplay-frontal.webp",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/txNfjDM/Logitech-Powerplay-frontal.webp",
          "https://i.ibb.co/F43T4yJ/Logitech-Powerplay-lateral.webp",
          "https://i.ibb.co/FqpFY96/Logitech-Powerplay-caracteristicas.webp",
          "https://i.ibb.co/hLV0pjS/Logitech-Powerplay-diagonal.webp",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercent: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/b2rJQmM/Logitech-Desk-Mat-Frontal.webp",
          "https://i.ibb.co/bzFzWwq/Logitech-Desk-Mat-Material.webp",
          "https://i.ibb.co/FBH6Vy1/Logitech-Desk-Mat-Diagonal.webp",
          "https://i.ibb.co/3cFqctF/Logitech-Desk-Mat-Enrolado.webp",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercent: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl: "https://i.ibb.co/KbssyWD/Dell-S2421-HN-Frontal.jpg",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/KbssyWD/Dell-S2421-HN-Frontal.jpg",
          "https://i.ibb.co/gj8Djhq/Dell-S2421-HN-Baixo.jpg",
          "https://i.ibb.co/JQxz6bf/Dell-S2421-HN-Front.jpg",
          "https://i.ibb.co/WWvzcZc/Dell-S2421-HN-inferior.jpg",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercent: 15, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl: "https://i.ibb.co/vc6GCC2/Logitech-Surround-Sound-Z607-frontal.webp",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/vc6GCC2/Logitech-Surround-Sound-Z607-frontal.webp",
          "https://i.ibb.co/GFfrvRS/Logitech-Surround-Sound-Z607-diagonal.webp",
          "https://i.ibb.co/BVXPFR7/Logitech-Surround-Sound-Z607-unico.webp",
          "https://i.ibb.co/y6f6XMq/Logitech-Surround-Sound-Z607-controle.webp",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercent: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/7C1xnm2/Logitech-Dock-Frontal.webp",
          "https://i.ibb.co/wWcM5sy/Logitech-Dock-Diagonal.webp",
          "https://i.ibb.co/ZL4fr78/Logitech-Dock-Traseira.webp",
          "https://i.ibb.co/hV4HWCr/Logitech-Dock-Diagonal-Traseira.webp",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercent: 15, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
