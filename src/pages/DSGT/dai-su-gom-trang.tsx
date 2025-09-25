"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AmbassadorCard } from "@/components/ambassador-card";

const dsttCollections = [
  {
    id: "dstt1",
    images: [
      "/dstt1/03f61fab4b8593b5829ffc6238bb80597e80e0eb.jpg",
      "/dstt1/16ab8d8c25654d2d29b079c793bb529542a4911e.jpg",
      "/dstt1/28696deb797982e064a5d9ef9e2947507f1652ad.jpg",
      "/dstt1/3193f46950b52b968dd36e3af6448cd778f35b04.jpg",
      "/dstt1/3d5d3a88e6604ee046bad24ce3b7db7540dacf32.jpg",
      "/dstt1/4b16c3d7de01378cf59ae573ff261ac07d45e4b9.jpg",
      "/dstt1/4c5baf9b0d56342ba582acbccf80ea61fbe8f287.jpg",
      "/dstt1/5c3b9c22a79d36f5e63e9caf6f6d9a569ac35311.jpg",
      "/dstt1/67b4602b595209afdb05175f0c19a98acfec5aaf.jpg",
      "/dstt1/71bd4bcb81925da5fea5a4297f1eb55f2de26f20.jpg",
      "/dstt1/8486309aa8384eb34120ffdfc31e19ca8f49aaaa.jpg",
      "/dstt1/8c1564fb3d689c5a4ceca3af41cf7f8673f2c647.jpg",
      "/dstt1/94a056eca8ea81dff6d6fa9f9c87949e568f8355.jpg",
      "/dstt1/b1933784e6ff7e730a789b1fc94e24f5db23ee23.jpg",
      "/dstt1/b272fe90f0cd1c654d9bd749b0e13ddfad5a5f3e.jpg",
      "/dstt1/c26166d3aa9acf3d4e4a16cbe7a3e7bed5bd4e30.jpg",
      "/dstt1/d435cb53214410bf57ff7bc6a8979bf0d536846c.jpg",
      "/dstt1/d74b95e4d90265343ad9402cc8dd38c972ff8a26.jpg",
      "/dstt1/d89d2adb92a31417a70a318698cf3f3b9691f9ab.jpg",
      "/dstt1/e5b9d81e5989f40cf24cd1073f23ffbfab84d7cd.jpg",
    ],
  },
  {
    id: "dstt2",
    images: [
      "/dstt2/05251af65f2af9f0dc1847d1d73fc4c42a6ccdbe.jpg",
      "/dstt2/05aa935e33913ffd427ca13089843b5e59cd3104.jpg",
      "/dstt2/0a5075593a74c92b88b691a24bdc4a46cb2bf206.jpg",
      "/dstt2/0f8782728e189a04dde0471c23933653f639b7d2.png",
      "/dstt2/169c977fe579a288bdd176a59ff4721112368c74.jpg",
      "/dstt2/17524ed510b02ec5950edd4ff433c960602cb891.jpg",
      "/dstt2/2154dc3b2a579fa7d82c9d7042b88d164520ec01.jpg",
      "/dstt2/4b3686e7e49391c94d8f4dfb29beb2ba9400dff2.jpg",
      "/dstt2/77915fe404b18d06d62486c6d8bbaea669eedf8e.png",
      "/dstt2/8478a9ee56e2433c97e8b7afc39ceb6253b1a1cf.jpg",
      "/dstt2/8cbfecd87cf73d7e97e3101f8f5543b74388d210.jpg",
      "/dstt2/9f1251e9b675e222b8cb6e49b84ac7957419ce21.jpg",
      "/dstt2/a23dbca129deeedd36b7ed9eff1d40dd5f0765a4.jpg",
      "/dstt2/b06057d064e1d72f2bb222b772f0d19d175a0a00.jpg",
      "/dstt2/b6a41ade65c1cfc75e6a4582f2bc82280e3223ec.jpg",
      "/dstt2/bff9c17125f014cf116a81bbe352e44a171dcfe8.jpg",
      "/dstt2/cb58e854dc50f654a61d202cfa4c1d6f4af3fd9b.jpg",
      "/dstt2/dcb24f84fbf1a61daeac3a42404998b2b4143d50.jpg",
      "/dstt2/f364dd64ad693a675a04fa36eb7c96b3c321befc.jpg",
      "/dstt2/f4119cb1c764b29de68a84d42080b3c3e683bbbd.jpg",
    ],
  },
  {
    id: "dstt3",
    images: [
      "/dstt3/0399883ef0f4c4f823fbbd40b0dcdcd9943ff21c.jpg",
      "/dstt3/05251af65f2af9f0dc1847d1d73fc4c42a6ccdbe.jpg",
      "/dstt3/0a5075593a74c92b88b691a24bdc4a46cb2bf206.jpg",
      "/dstt3/0f8782728e189a04dde0471c23933653f639b7d2.png",
      "/dstt3/169c977fe579a288bdd176a59ff4721112368c74.jpg",
      "/dstt3/2154dc3b2a579fa7d82c9d7042b88d164520ec01.jpg",
      "/dstt3/46d0080f94a15887ff01aaeff66fe9b3ed08cb28.jpg",
      "/dstt3/77915fe404b18d06d62486c6d8bbaea669eedf8e.png",
      "/dstt3/8478a9ee56e2433c97e8b7afc39ceb6253b1a1cf.jpg",
      "/dstt3/8a22a6ef5e361f96676b47c32dfc03e71de5915e.jpg",
      "/dstt2/8cbfecd87cf73d7e97e3101f8f5543b74388d210.jpg",
      "/dstt2/9f1251e9b675e222b8cb6e49b84ac7957419ce21.jpg",
      "/dstt3/a23dbca129deeedd36b7ed9eff1d40dd5f0765a4.jpg",
      "/dstt3/b06057d064e1d72f2bb222b772f0d19d175a0a00.jpg",
      "/dstt3/b6a41ade65c1cfc75e6a4582f2bc82280e3223ec.jpg",
      "/dstt3/cb58e854dc50f654a61d202cfa4c1d6f4af3fd9b.jpg",
      "/dstt3/dcb24f84fbf1a61daeac3a42404998b2b4143d50.jpg",
      "/dstt3/e3e2e63504a3b34af398cb09e71ed82ee956e4c8.jpg",
      "/dstt3/f364dd64ad693a675a04fa36eb7c96b3c321befc.jpg",
      "/dstt3/f4119cb1c764b29de68a84d42080b3c3e683bbbd.jpg",
    ],
  },
];

const ambassadors = [
  // {
  //   name: "Lê Thành Đạt",
  //   description: "Mình tin rằng chỉ cần mỗi người cùng lan tỏa một chút ấm áp, thì nụ cười của các em sẽ rực rỡ như ánh trăng đêm rằm. Và nếu bạn cũng muốn gửi gắm yêu thương, hãy theo dõi và ủng hộ chiến dịch cùng mình nha!",
  //   imageSrc: "/dsttcard/Lê Thành Đạt.jpg",
  //   socialHref: "https://www.facebook.com/share/p/1VXaiHHvzs/"
  // },
  // {
  //   name: "Ngô Minh Khôi",
  //   description: "Được đồng hành với chiến dịch lần này, mình mong có thể góp một phần nhỏ bé để mùa trăng thêm trọn vẹn, để những nụ cười trong veo vẫn nở rộ nơi khó khăn nhất.",
  //   imageSrc: "/dsttcard/Ngô Minh Khôi.jpg",
  //   socialHref: "https://www.facebook.com/share/p/1CT2nKVfbL/?mibextid=wwXIfr"
  // },
  {
    name: "Bùi Thị Phương Thảo",
    description: "Với mình, được góp một phần nhỏ bé trong hành trình này là niềm hạnh phúc lớn lao. Bởi mình tin rằng, Trung thu không chỉ là tết của những đứa trẻ đủ đầy, mà còn là dịp để tất cả chúng ta cùng nhau sẻ chia, cùng thắp lên ánh sáng yêu thương, để bầu trời tuổi thơ của những em nhỏ kiên cường cũng rực rỡ như ánh trăng tròn.",
    imageSrc: "/dsttcard/Bùi Thị Phương Thảo.jpg",
    socialHref: "https://www.facebook.com/share/p/1Bb989YC2Z/"
  },
  {
    name: "Nguyễn Đình Khang Thịnh",
    description: `Cùng mình và chiến dịch "Ấm 5: Câu chuyện mùa trăng" lan tỏa thêm yêu thương, để mỗi chiếc lồng đèn, mỗi chiếc bánh Trung thu không chỉ là món quà mà còn gửi đến em nhỏ một lời chúc bình an, một chút niềm tin, một chút hy vọng rằng: "Các em không hề đơn độc trong mùa trăng này."`,
    imageSrc: "/dsttcard/Nguyễn Đình Khang Thịnh.jpg",
    socialHref: "https://www.facebook.com/share/p/14MZn5RH4Gd/"
  },
  {
    name: "Nguyễn Trần Đức",
    description: "Điều khiến mình cảm thấy hạnh phúc nhất chính là được nhìn thấy nụ cười rạng rỡ của các em. Mình hiểu rằng, chỉ một hành động nhỏ, một sự sẻ chia giản đơn cũng có thể mang lại niềm vui và ấm áp cho các em trong dịp Trung thu này.",
    imageSrc: "/dsttcard/Nguyễn Trần Đức.jpg",
    socialHref: "https://www.facebook.com/share/p/1FGcxc9g9E/"
  },
  {
    name: "Phạm Thị Hồng Ngọc",
    description: `Hơn cả một chiến dịch thiện nguyện mùa trung thu, ẩn chứa trong "Ấm" là cái ấm áp mà những người xa lạ có thể trao tặng cho nhau: từ yêu thương đến những món quà tinh thần. Mình tin rằng, nhiều năm sau nữa, Ấm vẫn sẽ luôn lan tỏa rất nhiều giá trị đến cộng đồng, tiếp thêm nguồn động lực để các em nhỏ có được một mùa trung thu trọn vẹn, ấm áp hơn.`,
    imageSrc: "/dsttcard/Phạm Thị Hồng Ngọc.jpg",
    socialHref: "https://www.facebook.com/share/p/16kvY7Duqk/"
  },
  {
    name: "Nguyễn Diệu Linh",
    description: "Mỗi món quà trao đi không chỉ là bánh Trung thu hay đèn lồng, mà còn là lời chúc, là sự đồng hành, là niềm hy vọng rằng các em sẽ luôn cảm nhận được tình yêu thương bao quanh.",
    imageSrc: "/dsttcard/Nguyễn Diệu Linh.jpg",
    socialHref: "https://www.facebook.com/share/1CeVSrB38D/"
  },
  {
    name: "Nguyễn Thị Minh Hiếu",
    description: "Ánh sáng của trăng có thể soi sáng cả bầu trời nhưng ánh sáng từ lòng nhân ái mới có thể lan tỏa và chạm đến trái tim.",
    imageSrc: "/dsttcard/Nguyễn Thị Minh Hiếu.jpg",
    socialHref: "https://www.facebook.com/share/p/1CPZNBJ6JT/"
  },
  {
    name: "Nguyễn Thị Bích Phượng",
    description: "Và mình tin rằng, hạnh phúc không phải là nhận được bao nhiêu, mà là khi ta có thể trao đi và nhìn thấy những đôi mắt thơ ngây sáng rực niềm vui. Hãy cùng biến ký ức đó thành món quà cho các em – để ánh trăng năm nay không chỉ tỏa sáng trên bầu trời, mà còn bừng sáng trong trái tim những đứa trẻ tại Nhi đồng 1.",
    imageSrc: "/dsttcard/Nguyễn Thị Bích Phượng.jpg",
    socialHref: "https://www.facebook.com/share/p/1Ykp44r3ud/"
  },
  {
    name: "Nguyễn Thị Thùy Dương",
    description: "Mùa trăng không chỉ là ánh sáng từ vầng trăng rằm, mà là ánh sáng từ lòng nhân ái – khi người với người xích lại gần nhau, khi chúng ta cùng nhau thắp lên hy vọng cho những mảnh đời chưa từng biết đến niềm vui trọn vẹn.",
    imageSrc: "/dsttcard/Nguyễn Thị Thùy Dương.jpg",
    socialHref: "https://www.facebook.com/share/p/17Ff2D8Cnh/"
  },
  {
    name: "Ngô Gia Mẫn",
    description: "Trung Thu vốn là ngày hội của thiếu nhi – ngày các em được vui chơi, rước đèn, phá cỗ cùng gia đình và bạn bè. Nhưng không phải em nhỏ nào cũng có may mắn đó. Chính vì thế, Ấm đã mang đến một chương trình ý nghĩa, đưa không khí Trung Thu đến tận bệnh viện Nhi đồng để các em bé vẫn được đón trăng, nhận quà, cười vui và cảm thấy ấm áp như bao bạn nhỏ khác.",
    imageSrc: "/dsttcard/Ngô Gia Mẫn.jpg",
    socialHref: "https://www.facebook.com/share/p/1BJFGFFiSk/"
  },
  {
    name: "Nguyễn Duy Phương",
    description: "Trung thu luôn là dịp để chúng ta trở về tuổi thơ, nhớ đến những chiếc lồng đèn sáng rực và tiếng trống lân rộn ràng. Nhưng không phải em nhỏ nào cũng có may mắn được đón một mùa trăng trọn vẹn như thế.",
    imageSrc: "/dsttcard/Nguyễn Duy Phương.jpg",
    socialHref: "https://www.facebook.com/share/p/17EEp2k8fF/"
  },
  // {
  //   name: "Đoàn Nga Phương anh",
  //   description: "Chiến dịch không chỉ đơn thuần là trao quà, mà còn là hành trình kết nối trái tim, lan tỏa tinh thần nhân văn đến cộng đồng. Mình tin rằng, mỗi hành động nhỏ hôm nay sẽ góp phần thắp sáng niềm tin và hy vọng cho ngày mai của các em.",
  //   imageSrc: "/dsttcard/Đoàn Nga Phương anh.jpg",
  //   socialHref: "https://www.facebook.com/share/p/19T8NkeUvb/?mibextid=wwXIfr"
  // },
  // {
  //   name: "Nguyễn Hoàng Kiều Diễm",
  //   description: "Trung thu với nhiều người là sum vầy, là ánh đèn lấp lánh và tiếng cười giòn tan bên gia đình. Nhưng đâu đó vẫn có những em nhỏ phải đón trăng trong phòng bệnh, lặng lẽ và thiếu vắng niềm vui tuổi thơ.",
  //   imageSrc: "/dsttcard/Nguyễn Hoàng Kiều Diễm.jpg"
  // },
  {
    name: "Nguyễn Thanh Tùng",
    description: "Mình tin rằng, khi mỗi người chung tay một chút, mùa trăng sẽ trở nên thật sự trọn vẹn – không chỉ cho các em nhỏ trong bệnh viện, mà còn cho tất cả chúng ta, những người biết yêu thương và sẻ chia.",
    imageSrc: "/dsttcard/Nguyễn Thanh Tùng.jpg"
  },
  {
    name: "Phạm Hoàng Bảo Long",
    description: "Với mình, quá đỗi may mắn khi được góp chút sức nhỏ cho hành trình này, thêm chút sức để bầu trời các em sáng hơn, thêm chút Ấm để hạnh phúc các em được đong đầy. Mình tin rằng Trung thu không chỉ là niềm vui để những em nhỏ đủ đầy, mà còn là khoảnh khắc để chúng ta nắm tay nhau cùng san sẻ, mỗi chiếc bánh, mỗi ngọn nến bé xíu đều có thể đẩy lùi một khoảng tối, để mỗi ô cửa phòng bệnh cũng có trăng ghé thăm.",
    imageSrc: "/dsttcard/Phạm Hoàng Bảo Long.jpg",
    socialHref: "https://www.facebook.com/share/p/1QxfnqSx1B/"
  },
  {
    name: "Nguyễn Ngọc Mai",
    description: "Mùa trăng năm nay, dưới vầng trăng vàng óng như mật, mình chợt nhận ra một điều giản dị. Cái \"ấm\" mà ta vẫn hằng tìm kiếm, hóa ra không nằm ở một bữa tiệc tưng bừng, một món quà đắt giá, hay một chốn đông đúc náo nhiệt. Nó ẩn mình trong những khoảnh khắc bé nhỏ, trong những sẻ chia lặng thầm, và trên hành trình ta chọn bước đi để trao đi yêu thương.",
    imageSrc: "/dsttcard/Nguyễn Ngọc Mai.jpg",
    socialHref: "https://www.facebook.com/share/p/1W4BAZrM1G/?mibextid=wwXIfr"
  },
  {
    name: "Nguyễn Thị Thúy Hiền",
    description: "Khi mỗi chúng ta cùng nhau chung tay, những nụ cười sẽ được thắp sáng, những trái tim sẽ được sưởi ấm. Và có lẽ, chính lúc trao đi yêu thương, mình mới thấy Trung thu trở nên thật sự ý nghĩa. Mùa trăng năm nay, Ấm nhất là khi không chỉ có ánh trăng ngoài kia, mà còn có ánh sáng trong tim mỗi người",
    imageSrc: "/dsttcard/Nguyễn Thị Thúy Hiền.jpg",
    socialHref: "https://www.facebook.com/share/1FmN4ncD27/?mibextid=wwXIfr"
  },
  {
    name: "Trần Vũ Quỳnh Giao",
    description: `Lần đầu tiên thử sức với vai trò Đại sứ truyền thông, mình đã có không ít nỗi niềm và băn khoăn nhất định, nhưng rồi khi nhận ra những giá trị tích cực mà "Ấm 5: Câu chuyện mùa trăng" của Three O'clock muốn lan tỏa, mình đã không do dự nữa`,
    imageSrc: "/dsttcard/Trần Vũ Quỳnh Giao.jpg"
  },
  {
    name: "Trần Thị Kim Ngân",
    description: `Chiến dịch "ẤM" không chỉ là một chương trình từ thiện đơn thuần. Đó là lời kêu gọi từ trái tim, mong muốn tạo ra một đêm hội trăng rằm thật đặc biệt, nơi nụ cười của các em được thắp sáng bằng sự quan tâm, những món quà nhỏ và những lời động viên chân thành.`,
    imageSrc: "/dsttcard/Trần Thị Kim Ngân.jpg"
  },
  {
    name: "Phạm Thị Hồng Ngọc",
    description: "Trong suốt quá trình chuẩn bị cho dự án này, mình thật sự rất biết ơn vì nhận được rất nhiều sự giúp đỡ, từ thầy cô, bạn bè, các anh chị nghệ sĩ. Nhờ đó mà mùa trăng năm nay ấm áp hơn, mặc cho những điều bất như ý vẫn đang thử thách tụi mình. Với mục tiêu mang 300 phần quà đến cho các em nhỏ tại Bệnh viện Nhi Đồng 1 TP.HCM, chúng mình rất mong dự án này được thêm nhiều bạn trẻ biết đến.",
    imageSrc: "/dsttcard/Phạm Thị Hồng Ngọc.jpg",
    socialHref: "https://www.facebook.com/share/p/17Ed6j969f/"
  },
  {
    name: "Trương Ngọc Khánh Tuyết",
    description: `Bản thân mình sau khi biết đến "Ấm" thì mình cảm thấy đây là một hoạt động hết sức ý nghĩa. Đúng như tên của chương trình, "Ấm" thật sự đã làm mình cảm thấy được sự ấm áp của tình người, chương trình cũng giúp mình truyền đi một phần hơi ấm đến các em.`,
    imageSrc: "/dsttcard/Trương Ngọc Khánh Tuyết.jpg",
    socialHref: "https://www.facebook.com/share/p/1Z4twi94TC/"
  },
  {
    name: "Lê Hoàng Bảo Trân",
    description: "Mùa trăng năm nay, có lẽ điều ấm áp nhất không nằm ở ánh đèn rực rỡ hay những chiếc lồng đèn lung linh sắc màu, mà là khoảnh khắc khi mình trao đi những yêu thương dù nhỏ bé, và nhận lại nụ cười trong trẻo như ánh trăng rằm trên gương mặt các em nhỏ.",
    imageSrc: "/dsttcard/Lê Hoàng Bảo Trân.jpg"
  },
  {
    name: "Trần Văn Quỳnh",
    description: "Trăng có thể sáng ở mọi nơi, nhưng lòng người chỉ thật sự ấm khi có sự đồng hành và sẻ chia. Trung thu không chỉ dành cho trẻ thơ, mà còn là dịp để mỗi chúng ta tìm về ký ức, trân trọng hiện tại và cùng nhau thắp lên những mùa trăng thật ấm.",
    imageSrc: "/dsttcard/Trần Văn Quỳnh.jpg",
    socialHref: "https://www.facebook.com/share/p/1AYg3BL2WH/"
  },
  {
    name: "Trần Đình Huy",
    description: "Vinh dự được đồng hành cùng dự án với vai trò Đại sứ Truyền thông, mình tin rằng, với một trái tim ấm áp và sự góp sức tuy rằng nhỏ bé này, dự án sẽ được nhiều người biết đến hơn, để thắp lên những trái tim phi thường kia ngọn lửa nồng ấm mang ánh sáng của sự hạnh phúc và vẹn tròn vào đêm trăng.",
    imageSrc: "/dsttcard/Trần Đình Huy.jpg",
    socialHref: "https://www.facebook.com/share/p/1Aaxfop8Sm/"
  },
  {
    name: "Trần Nhật Hào",
    description: `Mình cảm thấy trân trọng cơ hội được đồng hành cùng chiến dịch "Ấm 5: Câu chuyện mùa trăng". Mình hi vọng rằng mình có thể là một phần của cuộc hành trình gửi gắm niềm vui và hy vọng đến những em nhỏ có hoàn cảnh khó khăn đang điều trị tại Bệnh viện Nhi Đồng 1 TP.HCM.`,
    imageSrc: "/dsttcard/Trần Nhật Hào.jpg",
    socialHref: "https://www.facebook.com/share/p/1Mr2eB6cUi/"
  },
  // {
  //   name: "Tạ Trần Hoàng Anh",
  //   description: "Mình tin chúng ta không thể chữa bệnh như bác sĩ. Nhưng chúng mình hoàn toàn có thể chạm vào trái tim ai đó bằng một hành động nhỏ, và làm ấm cả một mùa trăng của họ.",
  //   imageSrc: "/dsttcard/Tạ Trần Hoàng Anh.jpg",
  //   socialHref: "https://www.facebook.com/share/p/1ZYhaL1itT/"
  // },
  {
    name: "Trương Minh Thư",
    description: `"Ấm 5" không chỉ trao tặng vật chất, mà còn lan tỏa tinh thần sẻ chia – để Trung thu không còn là niềm mong ước xa vời, mà trở thành hiện thực ấm áp trong lòng các em nhỏ. Hy vọng rằng, cùng với tất cả mọi người, chúng ta có thể viết tiếp những ký ức tuổi thơ thật đẹp cho các em, để mùa trăng năm nay thực sự trọn vẹn và đủ đầy.`,
    imageSrc: "/dsttcard/Trương Minh Thư.jpg"
  },
  // {
  //   name: "Lê Thị Hoàng Dung",
  //   description: `Chiến dịch "Ấm 5: Câu chuyện mùa trăng" của Three O'clock chính là lời nhắc dịu dàng cho mình: đứa trẻ bên trong không bao giờ biến mất, em ấy cần ta cho em cơ hội được sống lại bằng sự sẻ chia, bằng cách lan tỏa niềm vui cho những em nhỏ đang cần khác.`,
  //   imageSrc: "/dsttcard/Lê Thị Hoàng Dung.jpg",
  //   socialHref: "https://www.facebook.com/share/p/1LZyEqz8PH/"
  // },
  {
    name: "Trương Phú Nhuận",
    description: "Trung thu năm nay, mình không chỉ mong thấy ánh trăng sáng ngoài kia, mà còn mong thấy thật nhiều nụ cười rạng rỡ trên gương mặt các em nhỏ. Đó mới là giá trị lớn nhất mà mình muốn trao đi và nhận lại - giá trị của sự sẻ chia, yêu thương và niềm tin vào một mùa trăng thật sự ấm áp.",
    imageSrc: "/dsttcard/Trương Phú Nhuận.jpg",
    socialHref: "https://www.facebook.com/share/p/1TJwwEhaXb/?mibextid=wwXIfr"
  },
  // {
  //   name: "Nguyễn Phương Hùng Dũng",
  //   description: `Mình thật sự hạnh phúc khi trở thành Đại sứ Truyền thông của chương trình. Hy vọng rằng, với sự lan tỏa từ cộng đồng, những phần quà Trung thu sẽ đến tận tay các em nhỏ ở Bệnh viện Nhi Đồng 1, mang lại cho các em không chỉ chiếc bánh ngọt mà còn là một lời nhắn nhủ: "Các em không hề đơn độc trong hành trình này."`,
  //   imageSrc: "/dsttcard/Nguyễn Phương Hùng Dũng.jpg",
  //   socialHref: "https://www.facebook.com/share/p/12CC7jnhfGb/"
  // },
  // {
  //   name: "Thái Thành Tiến",
  //   description: "Hy vọng rằng khi những món quà nhỏ bé này được trao đi, chúng sẽ thắp sáng lên thật nhiều nụ cười, để trăng năm nay không chỉ sáng ngoài kia, mà còn sáng trong lòng các em. Với mình, mùa trăng ấm áp nhất chính là khi ta có thể cùng nhau lan tỏa điều tử tế, biến Trung thu thành mùa của yêu thương và sẻ chia.",
  //   imageSrc: "/dsttcard/Thái Thành Tiến.jpg",
  //   socialHref: "https://www.facebook.com/share/p/1ETjeRYaed/"
  // },
  {
    name: "Võ Ngọc Tường Vy",
    description: "Mùa trăng năm nay Ấm nhất là khi… chúng ta cùng nhau viết tiếp những câu chuyện yêu thương, để ánh trăng Trung thu không chỉ tỏa sáng trên bầu trời, mà còn sáng lên trong trái tim của mỗi em nhỏ và cả những người trao đi.",
    imageSrc: "/dsttcard/Võ Ngọc Tường Vy.jpg",
    socialHref: "https://www.facebook.com/share/p/1Cyn8Pejsb/"
  },
  {
    name: "Nguyễn Ngọc Bình",
    description: "Mình mong chờ được nhìn thấy những ánh mắt rạng rỡ khi các em đón nhận chiếc bánh, chiếc lồng đèn, hay đơn giản chỉ là cảm giác ấm áp khi biết rằng mình không hề đơn độc trong hành trình vượt qua bệnh tật.",
    imageSrc: "/dsttcard/Nguyễn Ngọc Bình.jpg"
  },
  // {
  //   name: "Lê Thảo Uyên",
  //   description: `Tham gia cùng chiến dịch "Ấm 5: Câu chuyện mùa trăng", mình tin rằng mỗi sự đóng góp, dù nhỏ thôi, cũng có thể trở thành một món quà ấm áp, giúp các em có thêm nụ cười và kỷ niệm đẹp trong tuổi thơ.`,
  //   imageSrc: "/dsttcard/Lê Thảo Uyên.jpg",
  //   socialHref: "https://www.facebook.com/share/p/16oRxaJbtC/?mibextid=wwXIfr"
  // },
  {
    name: "Nguyễn Công Thịnh",
    description: "Chiếc bánh nhỏ bỗng thành niềm vui lớn, chiếc lồng đèn bé xíu lại hóa thành mặt trăng riêng trong tay các em. Trung thu vì thế không chỉ còn là đêm rằm, mà là khoảnh khắc trái tim được sưởi ấm bởi nụ cười hồn nhiên. Niềm hạnh phúc thật sự không nằm ở ánh trăng trên cao, mà trong từng nụ cười lấp lánh giữa gian nan. Và chính những nụ cười ấy đã khiến mùa trăng năm nay trở nên ấm áp hơn bao giờ hết.",
    imageSrc: "/dsttcard/Nguyễn Công Thịnh.jpg",
    socialHref: "https://www.facebook.com/share/p/17GWtuzkdD/?mibextid=wwXIfr"
  },
  {
    name: "Trần Thiên Ngân",
    description: "Mình tin rằng, mỗi chiếc bánh, mỗi chiếc lồng đèn không chỉ là món quà vật chất mà còn là sự sẻ chia về tinh thần và lời chúc an lành gửi gắm đến các em. Với mình, khi nhìn thấy được thêm nhiều nụ cười hồn nhiên của các em nhỏ, mình tin rằng mình sẽ có một mùa trăng thật sự ấm áp với nhiều ý nghĩa nhân đ",
    imageSrc: "/dsttcard/Trần Thiên Ngân.jpg",
    socialHref: "https://www.facebook.com/share/p/178E1z2Wx6/?mibextid=wwXIfr"
  },
  // {
  //   name: "Lê Thị Kim Ngân",
  //   description: "Đồng hành cùng chiến dịch lần này là Đội Sứ giả Truyền thông (ĐSTT) – những sinh viên trẻ mang trong mình sức trẻ và nhiệt huyết, luôn sẵn sàng góp sức để tạo nên những giá trị tốt đẹp. Không chỉ là những người tổ chức chương trình, các bạn còn là cầu nối yêu thương, khơi dậy tinh thần sẻ chia và khuyến khích cộng đồng cùng chung tay.",
  //   imageSrc: "/dsttcard/Lê Thị Kim Ngân.jpg",
  //   socialHref: "https://www.facebook.com/share/p/1F191ivJAk/"
  // },
  // {
  //   name: "Nguyễn Thị Hường",
  //   description: "",
  //   imageSrc: "/dsttcard/Nguyễn Thị Hường.jpg"
  // },
  {
    name: "Trần Việt Nguyên Anh",
    description: "Trung thu vốn dĩ đẹp nhất ở sự hồn nhiên của những đứa trẻ. Mỗi mùa Trung thu đi qua đều để lại trong lòng mình một cảm xúc khó tả. Với nhiều em nhỏ, đó là những ngày được vui chơi rước đèn, quây quần bên gia đình và bạn bè. Nhưng cũng có những đứa trẻ phải đón Trung thu trong một không gian rất khác – nơi mà niềm vui giản dị ấy đôi khi trở thành điều xa xỉ.",
    imageSrc: "/dsttcard/Trần Việt Nguyên Anh.jpg"
  },
  // {
  //   name: "Trần Lê Thiên An",
  //   description: "Đang chờ edit",
  //   imageSrc: "/dsttcard/Trần Lê Thiên An.jpg"
  // },
  {
    name: "Võ Thị Lệ My",
    description: `Một món quà nhỏ, một chiếc lồng đèn giản dị cũng đủ làm đôi mắt trẻ thơ bừng sáng. Những điều bé nhỏ nhưng mang lại niềm vui thật lớn. Mùa thu năm nay, chiến dịch đã bước sang mùa thứ năm với tên gọi "Ấm 5: Câu chuyện mùa trăng".`,
    imageSrc: "/dsttcard/Võ Thị Lệ My.jpg",
    socialHref: "https://web.facebook.com/share/p/17GCZEJ1Uz/?mibextid=wwXIfr&_rdc=1&_rdr"
  },
  {
    name: "Lê Thùy Dương",
    description: `Chính những điều giản dị ấy đã khiến mình lựa chọn đồng hành cùng chiến dịch "Ấm 5: Câu chuyện mùa trăng". Mình tin rằng khi mỗi chúng ta cùng chung tay, những mảnh ghép sẻ chia sẽ ghép thành một bức tranh đầy ắp tình thương.`,
    imageSrc: "/dsttcard/Lê Thùy Dương.jpg",
    socialHref: "https://www.facebook.com/share/p/17CP2ZMLcd/"
  },
  // {
  //   name: "Ngô Nguyễn Minh Châu",
  //   description: "Là một Đại sứ Truyền thông, mình may mắn được góp phần lan tỏa câu chuyện này. Bởi mình tin rằng, khi tình thương được cộng đồng cùng nhau sẻ chia, thì Trung thu sẽ không chỉ sáng trên bầu trời… mà còn sáng trong từng đôi mắt trẻ thơ.",
  //   imageSrc: "/dsttcard/Ngô Nguyễn Minh Châu.jpg",
  //   socialHref: "https://www.facebook.com/share/p/17DX1yksYj/"
  // },
  {
    name: "Huỳnh Thị Thùy Trang",
    description: `Chính niềm yêu thương ấy khiến mùa trăng năm nay thật "Ấm", khi mình được chứng kiến ánh mắt long lanh và nụ cười rạng rỡ của các em tại Bệnh viện Nhi Đồng 1, để nhận ra rằng mỗi món quà, mỗi sẻ chia, dù nhỏ bé, đều thắp sáng trái tim các em và làm Trung thu trở nên thật trọn vẹn và ý nghĩa.`,
    imageSrc: "/dsttcard/Huỳnh Thị Thùy Trang.jpg"
  },
  {
    name: "Lê Nhật Huy",
    description: `Tham gia cùng chiến dịch Ấm lần này, mình hy vọng có thể dùng một chút sức trẻ và một chút yêu thương của mình để có thể góp thêm tinh thần để các em có một mùa Trung thu trọn vẹn hơn. Cùng nhau, chúng mình đã biến Trung thu thành một mùa đoàn viên không chỉ của gia đình, mà còn của cả cộng đồng – nơi ai cũng có thể cảm nhận sự kết nối và lòng nhân ái.`,
    imageSrc: "/dsttcard/Lê Nhật Huy.jpg",
    socialHref: "https://www.facebook.com/share/p/1CJ8naaBLr/?mibextid=wwXIfr"
  }
];


export default function DSGTPage() {

  const [idx, setIdx] = useState(0);
  const [dsttPage, setDsttPage] = useState(0);
  const [desktopGroupIdx, setDesktopGroupIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const currentDsttGroup = dsttCollections[dsttPage] ?? dsttCollections[0];
  const totalSlides = ambassadors.length;
  const MAX_DOTS = 7;
  const startDot = Math.min(
    Math.max(idx - Math.floor(MAX_DOTS / 2), 0),
    Math.max(totalSlides - MAX_DOTS, 0)
  );
  const endDot = Math.min(startDot + MAX_DOTS, totalSlides);
  const visibleDotIndices = Array.from({ length: endDot - startDot }, (_, k) => startDot + k);
  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const total = ambassadors.length;
    const next = (i + total) % total;
    setIdx(next);
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const applyEffects = () => {
    const el = trackRef.current;
    if (!el) return;
  
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  
    // Mobile: clear mọi hiệu ứng để nét căng
    if (!isDesktop) {
      slideRefs.current.forEach((node) => {
        if (!node) return;
        node.style.transform = "none";
        node.style.opacity = "1";
        node.style.filter = "none"; // <- đảm bảo không còn blur
      });
      return;
    }
  
    // Desktop: vẫn scale/opacity nếu mày thích, NHƯNG KHÔNG blur
    const center = el.getBoundingClientRect().left + el.clientWidth / 2;
  
    slideRefs.current.forEach((node) => {
      if (!node) return;
      const r = node.getBoundingClientRect();
      const slideCenter = r.left + r.width / 2;
      const dist = Math.abs(slideCenter - center);
  
      const t = Math.max(0, 1 - dist / (el.clientWidth / 1.2));
      const scale = 0.93 + 0.07 * t;
      const opacity = 0.55 + 0.45 * t;
  
      node.style.transform = `scale(${scale})`;
      node.style.opacity = String(opacity);
      node.style.filter = "none"; // <- không dùng blur nữa
    });
  };
  


  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const newIdx = Math.round(el.scrollLeft / el.clientWidth);
    if (newIdx !== idx) setIdx(newIdx);
    requestAnimationFrame(applyEffects);
  };

  useEffect(() => {
    applyEffects();
    const reSnap = () => {
      goTo(idx);
      requestAnimationFrame(applyEffects);
    };
    window.addEventListener("resize", reSnap);
    return () => window.removeEventListener("resize", reSnap);
  }, [idx]);

  const desktopGroups = useMemo(() => {
    const groupSize = 3; // Show 3 cards per page
    const groups = [];
    for (let i = 0; i < ambassadors.length; i += groupSize) {
      groups.push(ambassadors.slice(i, i + groupSize));
    }
    return groups;
  }, []);

  useEffect(() => {
    if (desktopGroupIdx >= desktopGroups.length) {
      setDesktopGroupIdx(0);
    }
  }, [desktopGroupIdx, desktopGroups.length]);

  const changeDesktopGroup = (step: number) => {
    const total = desktopGroups.length;
    if (total <= 1) return;
    setDesktopGroupIdx((prev) => (prev + step + total) % total);
  };

  return (
    <div className="w-full p-0 flex flex-col items-center overflow-x-hidden bg-[url('/img/dsgt-bg.svg')] bg-top bg-no-repeat bg-[length:100%_auto]">
      {/* ===================== TOP SECTION ===================== */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          {/* dsgt-main.svg: scale 1.3, neo TOP; giảm h + negative margin ở mobile để bớt gap */}
          <div className="relative w-full h-[50vh] sm:h-[58vh] md:h-[85vh] lg:h-screen overflow-visible -mb-8 sm:-mb-12 md:mb-0">
            <div
              className="
                absolute top-0 left-1/2 -translate-x-1/2
                h-full w-screen
                bg-no-repeat bg-top bg-contain
                origin-top scale-[1.3]
                pointer-events-none
              "
              style={{ backgroundImage: "url('/img/dsgt-main.svg')" }}
            />
          </div>

          {/* banner dưới */}
          <div className="relative w-[92%] sm:w-[88%] md:w-[82%] h-[220px] sm:h-[300px] md:h-[380px] lg:h-[440px] mb-12">
            <Image
              src="/img/dai-su-item.svg"
              alt="Đại sứ đồng hành"
              fill
              className="object-contain object-center"
              sizes="(min-width: 1024px) 60vw, 92vw"
            />
          </div>
        </div>
      </div>

      {/* ===================== BOTTOM SECTION — DESKTOP ===================== */}
      <div className="hidden md:flex flex-col items-center w-[95%] max-w-7xl mx-auto h-auto mb-10 overflow-visible">
        <div className="relative w-full overflow-visible">
          <div className="flex w-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${desktopGroupIdx * 100}%)` }}>
            {desktopGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="flex justify-center gap-8 w-full flex-shrink-0 overflow-visible pt-16">
                {group.map((ambassador) => (
                  <div key={ambassador.name} className="w-1/3 max-w-[400px] h-full">
                    <AmbassadorCard
                      name={ambassador.name}
                      description={ambassador.description}
                      imageSrc={ambassador.imageSrc}
                      socialHref={ambassador.socialHref}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <button
            type="button"
            onClick={() => changeDesktopGroup(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black/30 text-black/70 hover:bg-black/5 transition"
            aria-label="Xem bộ trước"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {desktopGroups.map((_, index) => (
              <span
                key={index}
                className={`h-2.5 w-6 rounded-full transition-all duration-300 ${index === desktopGroupIdx ? "bg-black" : "bg-black/20"
                  }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => changeDesktopGroup(1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black/30 text-black/70 hover:bg-black/5 transition"
            aria-label="Xem bộ tiếp theo"
          >
            ›
          </button>
        </div>
      </div>

      {/* ===================== BOTTOM SECTION — MOBILE SLIDER ===================== */}
      <div className="md:hidden relative w-full mb-14 pb-16">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex w-full overflow-x-auto overflow-y-visible snap-x snap-mandatory scroll-smooth px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {ambassadors.map((ambassador, i) => (
            <div key={ambassador.name} className="min-w-full snap-start px-3">
              <div className="flex justify-center pt-25 pb-6">
                <div
                  ref={(el) => { if (el) slideRefs.current[i] = el; }}
                  className="w-[92%] max-w-[380px] transition-[transform] duration-300 ease-out"                >
                  <AmbassadorCard
                    name={ambassador.name}
                    description={ambassador.description}
                    imageSrc={ambassador.imageSrc}
                    socialHref={ambassador.socialHref}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* arrows */}
        <button
          aria-label="Prev slide"
          onClick={() => goTo(idx - 1)}
          className="absolute -left-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center active:scale-95"        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={() => goTo(idx + 1)}
          className="absolute -right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center active:scale-95"        >
          ›
        </button>

        {/* dots */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex items-center gap-3">
          {/* counter */}
          <span className="text-[11px] text-black/70 tabular-nums">{idx + 1}/{totalSlides}</span>
          {/* compact dots */}
          <div className="flex gap-2">
            {visibleDotIndices.map((i) => (
              <button
                key={i}
                aria-label={`Đi tới slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === idx ? "bg-black w-6" : "bg-white/90 w-2.5 border border-black/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ===================== 80 ĐSTT SECTION ===================== */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-6 text-black mb-12">
            <span className="hidden sm:block relative w-5 h-5">
              <span className="absolute inset-0 bg-white/70 rotate-45 rounded-sm" />
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-wide">80 ĐSTT</h2>
            <span className="hidden sm:block relative w-5 h-5">
              <span className="absolute inset-0 bg-white/70 rotate-45 rounded-sm" />
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-10 gap-y-8 sm:gap-y-10">
            {currentDsttGroup.images.map((src, index) => (
              <div key={`${currentDsttGroup.id}-${index}`} className="flex flex-col items-center gap-4 text-black">
                <div className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64">
                  <Image
                    src={src}
                    alt={`${currentDsttGroup.id} member ${index + 1}`}
                    fill
                    className="rounded-full object-cover"
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#C19268] text-white text-sm font-medium shadow-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2F241E] font-semibold">
                    f
                  </span>
                  Social link
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-3">
            {dsttCollections.map((collection, pageIndex) => (
              <button
                key={collection.id}
                aria-label={`Xem nhóm ${collection.id}`}
                onClick={() => setDsttPage(pageIndex)}
                className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ${dsttPage === pageIndex
                  ? "bg-[#2F241E] border-[#2F241E] scale-110"
                  : "bg-white border-[#2F241E]/40 hover:bg-[#C19268]/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
