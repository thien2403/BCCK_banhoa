import image from './Image';
export default restaurantData = [
  {
    id: 1,
    name: 'Cây Trồng Ban Công ',
    menu: [
      {
        menuId: 11,
        nameProducts: 'Cây Tùng Thơm',
        photo: [
          {
            imageId: 12,
            path: image.caytungthom1,
          },
          {
            imageId: 22,
            path: image.caytungthom2,
          },
          {
            imageId: 32,
            path: image.caytungthom3,
          },
        ],
        avatarImage: image.caytungthom4,
        description:
          'Cây Tùng Thơm (tên khoa học: Cupressus Macrocarpa) Ngoài ra, nó còn một số tên gọi khác như cây tùng hương, cây tùng chanh bởi chúng có mùi hương dễ chịu. Lá cây tùng thơm là lá kim, màu xanh tươi tắn và mọc rất xum xuê. Cây tùng có tinh dầu đặc biệt giúp xua đuổi côn trùng, vì thế chúng ít khi bị sâu bệnh.',
        price: 420000,
      },
      {
        menuId: 21,
        nameProducts: 'Cây Trầu bà Nam Mỹ',
        photo: [
          {
            imageId: 22,
            path: image.caytrauba2,
          },
        ],
        avatarImage: image.caytrauba1,
        description:
          'Là loài cây sở hữu cho mình những chiếc lá được tạo nét như trái tim, càng lớn lá bắt đầu xuất hiện các đường xẻ một cách ngẫu nhiên.',
        price: 4000000,
      },
      {
        menuId: 31,
        nameProducts: 'Cây Thiết Mộc Lan',
        photo: [
          {
            imageId: 31,
            path: image.caythietmoclan1,
          },
          {
            imageId: 32,
            path: image.caythietmoclan2,
          },
        ],
        avatarImage: image.caythietmoclan3,
        description:
          'Thiết Mộc Lan (tên khoa học: Mass Cane  hay Dracaena Fragrans) là loại cây trồng trong nhà dễ chăm sóc, có ý nghĩa mang lại tài lộc, vận may đến với gia chủ…',
        price: 100000,
      },
      {
        menuId: 4,
        nameProducts: 'Cây bàng Đài Loan  ',
        photo: [
          {
            imageId: 41,
            path: image.caybangdailoan1,
          },
          {
            imageId: 32,
            path: image.caybangdailoan2,
          },
          {
            imageId: 32,
            path: image.caybangdailoan3,
          },
        ],
        avatarImage: image.caybangdailoan1,
        description:
          'Cây Bàng Đài Loan Cẩm Thạch có lá nhỏ xinh và sắc xanh, viền trắng hồng rất khác biệt và nổi bật, giúp không gian trở nên độc đáo và sang trọng.',
        price: 1200000,
      },
      {
        menuId: 51,
        nameProducts: 'Cây Phát Tài',
        photo: [
          {
            imageId: 51,
            path: image.cayphattai1,
          },
          {
            imageId: 51,
            path: image.cayphattai2,
          },
          {
            imageId: 51,
            path: image.cayphattai3,
          },
        ],
        avatarImage: image.cayphattai1,
        description:
          'Cây phát tài núi rất thường được lựa chọn để làm quà tặng vào những dịp khai trương, lên nhà mới, văn phòng mới… với mong muốn đem lại nhiều tài lộc và may mắn cho người được tặng.',
        price: 1450000,
      },
      {
        menuId: 61,
        nameProducts: 'Cây Cỏ Lan Chi',
        photo: [
          {
            imageId: 61,
            path: image.caycolan1,
          },
          {
            imageId: 62,
            path: image.caycolan2,
          },
          {
            imageId: 63,
            path: image.caycolan3,
          },
        ],
        avatarImage: image.caycolan1,
        description:
          'Cỏ Lan Chi (hay còn gọi là Cỏ Nhện) là loại cây rất dễ sống với điều kiện khí hậu nóng tại Việt Nam. Đặc biệt, nó nằm trong top các loại cây lọc không khí rất hiệu quả, có thể đặt trong phòng ngủ giúp bạn có giấc ngủ trong lành hơn.',
        price: 125000,
      },
    ],
  },
  {
    id: 2,
    name: 'Cây Ngoài Trời ',
    menu: [
      {
        menuId: 111,
        nameProducts: 'Hoa Cúc Mâm Xôi',
        photo: [
          {
            imageId: 111,
            path: image.cucmamxoi,
          },
        ],
        avatarImage: image.cucmamxoi,
        description:
          'Cúc mâm xôi là một trong các loài hoa không thể thiếu vào dịp Tết cổ truyền. Chậu cúc mâm xôi có hình dáng tỏa ra theo dạng hình cầu, mang ý nghĩa vẹn tròn, cho một năm mới xuôn sẻ. Với màu vàng được xem là màu của sung túc, đầm ấm và nhiều tài lộc hơn. Do đó, người ta thường tặng cả cặp làm quà tặng cho ông bà, cha mẹ hoặc quý đối tác.',
        price: 380000,
      },
      {
        menuId: 112,
        nameProducts: 'Cây Tràu Bà',
        photo: [
          {
            imageId: 221,
            path: image.trauba,
          },
          {
            imageId: 222,
            path: image.trauba1,
          },
        ],
        avatarImage: image.trauba,
        description:
          'Cây Trầu Bà (tên khoa học: Philodendron Imperial) là một loài thực vật có hoa họ Ráy (Araceae), tượng trưng cho sự may mắn, thành đạt và bình an cho gia chủ…',
        price: 30000,
      },
      {
        menuId: 113,
        nameProducts: 'Cây Trường Sinh',
        photo: [
          {
            imageId: 331,
            path: image.truongsinh,
          },
          {
            imageId: 332,
            path: image.truongsinh1,
          },
          {
            imageId: 333,
            path: image.truongsinh,
          },
        ],
        avatarImage: image.truongsinh,
        description:
          'Cây Trường Sinh (tên khoa học: Peperomia Obtusifolia) là loại thực vật xanh tốt quanh năm, có khả năng sinh tồn mạnh mẽ, sức chống chịu cao. Trong phong thủy cây tượng trưng cho sức khỏe, sự trường tồn, ý chí mạnh mẽ và quyết liệt,.…',
        price: 150000,
      },
    ],
  },
  {
    id: 3,
    name: 'Sen Đá',
    menu: [
      {
        menuId: 1111,
        nameProducts: 'Sen Đá Da Rắn',
        photo: [
          {
            imageId: 4441,
            path: image.sendadaran,
          },
          {
            imageId: 4442,
            path: image.sendadaran1,
          },
          {
            imageId: 4443,
            path: image.sendadaran2,
          },
        ],
        avatarImage: image.sendadaran,
        description:
          'Sen Đá Da Rắn (tên khoa học: Senecio Scaposus Silver Coral) có những đặc điểm hình dáng rất đặc biệt, độc đáo. Cây cũng có tác dụng thanh lọc không khí, bảo vệ sức khỏe con người hiệu quả…',
        price: 100000,
      },
      {
        menuId: 1112,
        nameProducts: 'Sen Đá kim Cương',
        photo: [
          {
            imageId: 5551,
            path: image.sendakimcuong,
          },
          {
            imageId: 5552,
            path: image.sendakimcuong1,
          },
          {
            imageId: 5553,
            path: image.sendakimcuong2,
          },
        ],
        avatarImage: image.sendakimcuong,
        description:
          'Sen Đá Kim Cương (tên khoa học: Pachyphytum compactum) nổi bật bởi có màu xanh nhẹ nhàng và hình dáng nhỏ nhắn. Cây mang ý nghĩa của tình yêu vĩnh cửu, vẹn nguyên và dài lâu…',
        price: 75000,
      },
      {
        menuId: 1113,
        nameProducts: 'Sen Đá Pha Lê',
        photo: [
          {
            imageId: 6661,
            path: image.sendaphale1,
          },
          {
            imageId: 6662,
            path: image.sendaphale2,
          },
          {
            imageId: 6663,
            path: image.sendaphale3,
          },
        ],
        avatarImage: image.sendaphale3,
        description:
          'Sen Đá Pha Lê (tên khoa học: Graptosedum Francesco Baldi) có nguồn gốc từ Mexico và Arizona. Cây mang vẻ đẹp nhẹ nhàng tinh tế và rất bắt mắt được trồng nhiều tại ban công, cửa sổ…',
        price: 70000,
      },
      {
        menuId: 1114,
        nameProducts: 'Sen Đá Giva',
        photo: [
          {
            imageId: 7771,
            path: image.sendagiva,
          },
          {
            imageId: 7772,
            path: image.sendagiva,
          },
          {
            imageId: 7773,
            path: image.sendagiva2,
          },
        ],
        avatarImage: image.sendagiva,
        description:
          'Sen Đá Giva (tên khoa học: Echeveria Agavoides) có màu xanh tươi đặc trưng, đầu lá như những chiếc gai nhọn mọc xen kẽ nhau một cách cân đối. Lá cây mọc đều xung quanh gốc, xếp xòe ra rất đẹp…',
        price: 35000,
      },
    ],
  },
];
