const vocabularyData = [
    { 
        word: "安检", 
        pinyin: "ān jiǎn", 
        defZh: "安全检查的缩略语，指为了保障安全所进行的检查。", 
        defEn: "Security check", 
        defBm: "Pemeriksaan keselamatan", 
        example: "登机前，每位乘客都必须接受严格的安检。" 
    },
    { 
        word: "安理会", 
        pinyin: "ān lǐ huì", 
        defZh: "安全理事会的缩略语，特指联合国维持和平的机构。", 
        defEn: "Security Council (UNSC)", 
        defBm: "Majlis Keselamatan", 
        example: "联合国安理会就边境冲突召开了紧急闭门磋商。" 
    },
    { 
        word: "暗访", 
        pinyin: "àn fǎng", 
        defZh: "暗中调查、暗地里寻访查核实情。", 
        defEn: "Undercover investigation / Secret interview", 
        defBm: "Siasatan rahsia / Tinjauan tersembunyi", 
        example: "执法人员乔装改扮深入黑作坊进行暗访，掌握了第一手罪证。" 
    },
    { 
        word: "脱贫", 
        pinyin: "tuō pín", 
        defZh: "摆脱贫困状态，生活水平获得改善。", 
        defEn: "Alleviate poverty / Rise out of poverty", 
        defBm: "Keluar daripada kemiskinan", 
        example: "村民通过大力发展生态种植与加工，逐步实现了全村脱贫。" 
    },
    { 
        word: "保健", 
        pinyin: "bǎo jiàn", 
        defZh: "保护并增进身体健康。", 
        defEn: "Health care", 
        defBm: "Penjagaan kesihatan", 
        example: "平日里注意作息与饮食调节，是最经济的身体保健方法。" 
    },
    { 
        word: "备查", 
        pinyin: "bèi chá", 
        defZh: "保留存根或记录，以备日后检查翻阅。", 
        defEn: "Keep for future reference / Record for inspection", 
        defBm: "Disimpan untuk rujukan", 
        example: "财务部门将所有往来发票归档备查，以备年终核算。" 
    },
    { 
        word: "歪风", 
        pinyin: "wāi fēng", 
        defZh: "不良风气，违背道德纪律的不良习气。", 
        defEn: "Unhealthy trend / Bad practice", 
        defBm: "Gejala negatif / Budaya buruk", 
        example: "校方三令五申，坚决杜绝校内聚众霸凌的歪风。" 
    },
    { 
        word: "致谢", 
        pinyin: "zhì xiè", 
        defZh: "向人表达谢意或感激之情。", 
        defEn: "Express gratitude / Say thanks", 
        defBm: "Menyampaikan ucapan terima kasih", 
        example: "获救灾民紧握搜救队员的双手连连致谢。" 
    },
    { 
        word: "进言", 
        pinyin: "jìn yán", 
        defZh: "向尊长或上级提出意见、建议。", 
        defEn: "Offer advice to superiors", 
        defBm: "Memberi pandangan / Nasihat", 
        example: "忠臣冒死向国君直言进言，指出新法令中的漏洞。" 
    },
    { 
        word: "扶持", 
        pinyin: "fú chí", 
        defZh: "帮助、支持与扶助弱小者。", 
        defEn: "Support / Sustain", 
        defBm: "Menyokong / Membantu", 
        example: "政府拨款设立扶持基金，助力小微农户度过寒冬。" 
    },
    { 
        word: "报刊", 
        pinyin: "bào kān", 
        defZh: "报纸和期刊杂志的统称。", 
        defEn: "Newspapers and periodicals / The press", 
        defBm: "Akhbar dan majalah", 
        example: "图书馆每日阅览室里整齐摆放着各类华文报刊。" 
    },
    { 
        word: "应考", 
        pinyin: "yìng kǎo", 
        defZh: "参加考试、迎接考核。", 
        defEn: "Take an examination / Sit for a test", 
        defBm: "Menduduki peperiksaan", 
        example: "考生们调整好心态，镇定自若地步入考场应考。" 
    },
    { 
        word: "生隙", 
        pinyin: "shēng xì", 
        defZh: "产生矛盾、隔阂或裂痕。", 
        defEn: "Create rift / Cause misunderstanding", 
        defBm: "Timbul perselisihan / Retak hubungan", 
        example: "两人因一时言语误会而生隙，许久不相往来。" 
    },
    { 
        word: "传媒", 
        pinyin: "chuán méi", 
        defZh: "传播媒介的缩略语，包括报纸、广播、网络等。", 
        defEn: "Mass media", 
        defBm: "Media massa", 
        example: "在数字传媒时代，热点信息的扩散速度令人叹为观止。" 
    },
    { 
        word: "授业", 
        pinyin: "shòu yè", 
        defZh: "传授学业与专业知识技能。", 
        defEn: "Impart knowledge / Teach", 
        defBm: "Mengajar / Menurunkan ilmu", 
        example: "先贤设馆授业，为偏远乡野培育了一批批栋梁之才。" 
    },
    { 
        word: "超载", 
        pinyin: "chāo zài", 
        defZh: "交通工具装载的货物或乘客超过法定核定限额。", 
        defEn: "Overloaded", 
        defBm: "Lebih muatan", 
        example: "重型货车严重超载不仅损坏路面，更容易诱发连环车祸。" 
    },
    { 
        word: "集资", 
        pinyin: "jí zī", 
        defZh: "募集资金、筹措财力的缩略语。", 
        defEn: "Raise funds / Pool capital", 
        defBm: "Mengumpul modal / Mengutip dana", 
        example: "当地华人先辈集资兴办华小，守护了母语教育的薪火。" 
    },
    { 
        word: "查证", 
        pinyin: "chá zhèng", 
        defZh: "调查核实并加以证实。", 
        defEn: "Investigate and verify", 
        defBm: "Menyiasat dan mengesahkan", 
        example: "执法部门经过细致查证，揭开了虚假投资骗局的内幕。" 
    },
    { 
        word: "认错", 
        pinyin: "rèn cuò", 
        defZh: "承认自己的过失或错误。", 
        defEn: "Admit a mistake / Apologize", 
        defBm: "Mengaku kesalahan", 
        example: "他深知自身行为不当，主动在众人面前真诚认错。" 
    },
    { 
        word: "调研", 
        pinyin: "diào yán", 
        defZh: "调查研究的缩略语，指深入现场探明实情。", 
        defEn: "Investigation and research / Field survey", 
        defBm: "Kajian dan penyelidikan lapangan", 
        example: "专家组深入基层展开充分调研后，制定了河道治理蓝图。" 
    },
    { 
        word: "走访", 
        pinyin: "zǒu fǎng", 
        defZh: "前往多地调查访问、探望。", 
        defEn: "Visit / Interview on-site", 
        defBm: "Melawat dan meninjau", 
        example: "志工逐户走访水灾灾民，派送紧急生活必需品。" 
    },
    { 
        word: "待业", 
        pinyin: "dài yè", 
        defZh: "等待就业，处于寻找工作阶段。", 
        defEn: "Awaiting employment / Job-hunting", 
        defBm: "Menunggu peluang pekerjaan", 
        example: "青年培训计划旨在帮助待业毕业生掌握核心数字技能。" 
    },
    { 
        word: "电供", 
        pinyin: "diàn gōng", 
        defZh: "电力供应的缩略语。", 
        defEn: "Power supply / Electricity supply", 
        defBm: "Bekalan elektrik", 
        example: "技术团队冒雨抢修变压器，使瘫痪的电供在两小时内恢复。" 
    },
    { 
        word: "电商", 
        pinyin: "diàn shāng", 
        defZh: "电子商务的缩略语，指通过互联网进行的商业交易。", 
        defEn: "E-commerce", 
        defBm: "E-dagang", 
        example: "随着网络普及，传统手工艺人也纷纷借助电商开辟销路。" 
    },
    { 
        word: "五育", 
        pinyin: "wǔ yù", 
        defZh: "德育、智育、体育、群育（美育）、劳育的统称。", 
        defEn: "Five aspects of education (Moral, Intellectual, Physical, Group, Aesthetic)", 
        defBm: "Pendidikan lima aspek seimbang", 
        example: "中学教育倡导五育并重，促进学生健全人格的养成。" 
    },
    { 
        word: "夺标", 
        pinyin: "duó biāo", 
        defZh: "在比赛中夺取锦标或冠军。", 
        defEn: "Win the championship / Win the prize", 
        defBm: "Menjuarai pertandingan", 
        example: "校羽毛球队配合默契，力克劲敌一举夺标。" 
    },
    { 
        word: "督查", 
        pinyin: "dū chá", 
        defZh: "监督催促并进行检查。", 
        defEn: "Supervise and inspect", 
        defBm: "Memantau dan memeriksa", 
        example: "教育署官员常年深入各校督查教学与安全规程执行情况。" 
    },
    { 
        word: "反贪", 
        pinyin: "fǎn tān", 
        defZh: "反对贪污受贿的缩略语。", 
        defEn: "Anti-corruption", 
        defBm: "Pencegahan rasuah", 
        example: "反贪机构加大审查力度，依法惩处一切索贿枉法行为。" 
    },
    { 
        word: "防盗", 
        pinyin: "fáng dào", 
        defZh: "防止盗窃、防备盗贼的缩略语。", 
        defEn: "Theft prevention / Anti-burglary", 
        defBm: "Cegah kecurian", 
        example: "商户安装闭路监控系统以强化防盗措施。" 
    },
    { 
        word: "弃权", 
        pinyin: "qì quán", 
        defZh: "放弃行使自身合法权利或表决资格。", 
        defEn: "Abstain from voting / Forfeit rights", 
        defBm: "Berkecuali / Melepaskan hak", 
        example: "部分代表在最后一轮投票中选择弃权。" 
    },
    { 
        word: "辍学", 
        pinyin: "chuò xué", 
        defZh: "中途停止学业而离开学校。", 
        defEn: "Drop out of school", 
        defBm: "Berhenti sekolah / Cicir", 
        example: "助学金计划有效降低了贫困学子辍学的风险。" 
    },
    { 
        word: "研判", 
        pinyin: "yán pàn", 
        defZh: "研究分析并加以判断。", 
        defEn: "Study and assess / Analyze", 
        defBm: "Menganalisis dan menilai", 
        example: "指挥官仔细研判风向与地形，迅速拟定扑灭山火的最佳路线。" 
    },
    { 
        word: "治污", 
        pinyin: "zhì wū", 
        defZh: "治理污染、清除有害污染物的缩略语。", 
        defEn: "Pollution control / Environmental cleanup", 
        defBm: "Mengawal pencemaran", 
        example: "沿河化工厂被勒令停产改造，全力推进截污治污工程。" 
    },
    { 
        word: "防疫", 
        pinyin: "fáng yì", 
        defZh: "预防和控制传染性疾病。", 
        defEn: "Epidemic prevention", 
        defBm: "Pencegahan wabak", 
        example: "人人遵守公共卫生习惯是筑牢基层防疫屏障的基础。" 
    },
    { 
        word: "公关", 
        pinyin: "gōng guān", 
        defZh: "公共关系的缩略语，指维护与公众的良好联系。", 
        defEn: "Public relations (PR)", 
        defBm: "Hubungan awam", 
        example: "面对谣言，企业迅速采取公关措施发布实情以正视听。" 
    },
    { 
        word: "协作", 
        pinyin: "xié zuò", 
        defZh: "互相配合、共同工作以达成目标。", 
        defEn: "Cooperate / Collaborate", 
        defBm: "Bekerjasama / Berganding bahu", 
        example: "跨学科团队紧密协作，终于攻克了科研难关。" 
    },
    { 
        word: "国行", 
        pinyin: "guó háng", 
        defZh: "国家银行的缩略语。", 
        defEn: "Central Bank (Bank Negara)", 
        defBm: "Bank Negara", 
        example: "国行宣布维持现行隔夜政策利率不变以稳固经济。" 
    },
    { 
        word: "国中", 
        pinyin: "guó zhōng", 
        defZh: "国民中学的缩略语（马来西亚公立中学）。", 
        defEn: "National secondary school (SMK)", 
        defBm: "Sekolah Menengah Kebangsaan (SMK)", 
        example: "他从这所历史悠久的国中毕业后顺利升入公立大学。" 
    },
    { 
        word: "华小", 
        pinyin: "huá xiǎo", 
        defZh: "国民型华文小学的缩略语（马来西亚华文小学）。", 
        defEn: "National-type Chinese primary school (SJKC)", 
        defBm: "Sekolah Jenis Kebangsaan Cina (SJKC)", 
        example: "全马千余所华小是培育双语复合人才的坚实摇篮。" 
    },
    { 
        word: "独中", 
        pinyin: "dú zhōng", 
        defZh: "华文独立中学的缩略语。", 
        defEn: "Chinese Independent High School", 
        defBm: "Sekolah Menengah Persendirian Cina", 
        example: "独中统考文凭获得了海内外众多顶尖高等学府的认可。" 
    },
    { 
        word: "供求", 
        pinyin: "gōng qiú", 
        defZh: "供应和需求的缩略语。", 
        defEn: "Supply and demand", 
        defBm: "Bekalan dan permintaan", 
        example: "物价随市场供求关系的自发调节而出现上下波动。" 
    },
    { 
        word: "华社", 
        pinyin: "huá shè", 
        defZh: "华人社会的缩略语。", 
        defEn: "Chinese community", 
        defBm: "Masyarakat Cina", 
        example: "全马华社齐心协力，为清寒学子捐献了数额可观的助学金。" 
    },
    { 
        word: "化肥", 
        pinyin: "huà féi", 
        defZh: "化学肥料的缩略语。", 
        defEn: "Chemical fertilizer", 
        defBm: "Baja kimia", 
        example: "过度依赖化学合成化肥易导致农田土壤酸碱失衡。" 
    },
    { 
        word: "环保", 
        pinyin: "huán bǎo", 
        defZh: "环境保护的缩略语。", 
        defEn: "Environmental protection", 
        defBm: "Pemeliharaan alam sekitar", 
        example: "自备便当盒与随行杯是日常践行绿色环保的良好习惯。" 
    },
    { 
        word: "互助", 
        pinyin: "hù zhù", 
        defZh: "彼此之间互相帮助、相互扶持。", 
        defEn: "Mutual assistance / Help each other", 
        defBm: "Tolong-menolong / Gotong-royong", 
        example: "邻里之间守望互助，共渡突如其来的洪涝难关。" 
    },
    { 
        word: "互鉴", 
        pinyin: "hù jiàn", 
        defZh: "相互借鉴、互相学习彼此的长处。", 
        defEn: "Mutual learning / Learn from each other", 
        defBm: "Belajar bersama / Saling mencontohi", 
        example: "多元文明在交流互鉴中方能激发更深邃的文化光彩。" 
    },
    { 
        word: "康复", 
        pinyin: "kāng fù", 
        defZh: "恢复元气与健康状态。", 
        defEn: "Recover / Rehabilitate", 
        defBm: "Pulih sihat / Sembuh", 
        example: "经过数月坚持不懈的物理治疗，伤员已经全面康复。" 
    },
    { 
        word: "调和", 
        pinyin: "tiáo hé", 
        defZh: "调解缓和矛盾、消除冲突。", 
        defEn: "Mediate / Reconcile", 
        defBm: "Mendamaikan / Mengharmonikan", 
        example: "长辈出面耐心倾听，积极调和晚辈之间的摩擦纠纷。" 
    },
    { 
        word: "猜疑", 
        pinyin: "cāi yí", 
        defZh: "没有根据地怀疑、揣测他人意图。", 
        defEn: "Suspicion / Mistrust", 
        defBm: "Syak wasangka / Curiga", 
        example: "缺乏真诚坦率的沟通极易导致合伙人间产生无端猜疑。" 
    },
    { 
        word: "统筹", 
        pinyin: "tǒng chóu", 
        defZh: "统揽全局并进行全面合理的规划安排。", 
        defEn: "Coordinate holistically / Overall planning", 
        defBm: "Merancang secara menyeluruh", 
        example: "面对繁多课业与课外活动，中学生必须学会自我统筹时间。" 
    },
    { 
        word: "家暴", 
        pinyin: "jiā bào", 
        defZh: "家庭暴力的缩略语。", 
        defEn: "Domestic violence", 
        defBm: "Keganasan rumah tangga", 
        example: "法律明确保障弱者权益，公众对家暴绝不可保持沉默。" 
    },
    { 
        word: "家访", 
        pinyin: "jiā fǎng", 
        defZh: "家庭访问的缩略语，教师前往学生家庭走访探视。", 
        defEn: "Home visit (by teacher)", 
        defBm: "Lawatan ke rumah", 
        example: "班主任利用假期进行家访，了解学生的成长与起居背景。" 
    },
    { 
        word: "节能", 
        pinyin: "jié néng", 
        defZh: "节约能源的缩略语。", 
        defEn: "Energy saving", 
        defBm: "Penjimatan tenaga", 
        example: "离开空置教室随手关灯是举手之劳的节能行为。" 
    },
    { 
        word: "纾困", 
        pinyin: "shū kùn", 
        defZh: "解决、化解或缓解陷入的困难与危机。", 
        defEn: "Relieve difficulties / Bailout", 
        defBm: "Melegakan kesusahan", 
        example: "银行为中小商户推出纾困贷款，以解燃眉之急。" 
    },
    { 
        word: "就学", 
        pinyin: "jiù xué", 
        defZh: "进入学校接受教育、就读求学。", 
        defEn: "Enroll in school / Attend school", 
        defBm: "Bersekolah / Menuntut ilmu", 
        example: "慈善机构帮助多名偏远原住民儿童获得了就学的机会。" 
    },
    { 
        word: "禁烟", 
        pinyin: "jìn yān", 
        defZh: "禁止吸烟的缩略语。", 
        defEn: "Smoking ban / No smoking", 
        defBm: "Larangan merokok", 
        example: "所有校园与食肆公共区域一律实行全天候严格禁烟。" 
    },
    { 
        word: "节流", 
        pinyin: "jié liú", 
        defZh: "节省开支、减少不必要的支出消耗。", 
        defEn: "Cut down expenses / Curtail expenditure", 
        defBm: "Berjimat cermat / Mengurangkan perbelanjaan", 
        example: "在面对收入缩减时，家庭理财应先从削减非必要消费开始节流。" 
    },
    { 
        word: "查验", 
        pinyin: "chá yàn", 
        defZh: "检查核实以验证真伪或符合标准。", 
        defEn: "Examine and verify", 
        defBm: "Memeriksa dan mengesahkan", 
        example: "边防关卡对入境货箱所附单据实施严格的逐项查验。" 
    },
    { 
        word: "监管", 
        pinyin: "jiān guǎn", 
        defZh: "监督与管理的缩略语。", 
        defEn: "Supervision and regulation", 
        defBm: "Penyeliaan dan kawal selia", 
        example: "金融管理局强化对线上借贷平台的日常审核与风险监管。" 
    },
    { 
        word: "科普", 
        pinyin: "kē pǔ", 
        defZh: "科学普及的缩略语，指向大众普及科学常识。", 
        defEn: "Popular science", 
        defBm: "Mempopularkan sains", 
        example: "自然博物馆举行的趣味科普展激发了孩子们对宇宙的向往。" 
    },
    { 
        word: "科研", 
        pinyin: "kē yán", 
        defZh: "科学研究的缩略语。", 
        defEn: "Scientific research", 
        defBm: "Penyelidikan saintifik", 
        example: "学者们夜以继日投身科研，终开发出新型环保降解材料。" 
    },
    { 
        word: "科技", 
        pinyin: "kē jì", 
        defZh: "科学与技术的缩略语。", 
        defEn: "Science and technology", 
        defBm: "Sains dan teknologi", 
        example: "现代数字科技正以不可阻挡之势重塑着各行各业的运作生态。" 
    },
    { 
        word: "克难", 
        pinyin: "kè nán", 
        defZh: "克服艰难困苦、攻克难关。", 
        defEn: "Overcome difficulties", 
        defBm: "Mengatasi kesukaran", 
        example: "全校师生在物资匮乏的岁月里艰苦克难，建成了首座科学楼。" 
    },
    { 
        word: "考核", 
        pinyin: "kǎo hé", 
        defZh: "考查、审核与检定人的表现或工作成效。", 
        defEn: "Assess / Evaluate", 
        defBm: "Menilai / Menguji prestasi", 
        example: "人事处制定了科学的年终指标，全面考核职员的综合实绩。" 
    },
    { 
        word: "创新", 
        pinyin: "chuàng xīn", 
        defZh: "开辟新意、突破守旧以创立新事物。", 
        defEn: "Innovate / Innovation", 
        defBm: "Berinovasi / Inovasi", 
        example: "企业唯有不断在产品上开拓创新，方能在市场中立于不败。" 
    },
    { 
        word: "平抑", 
        pinyin: "píng yì", 
        defZh: "平定抑制过度波动的市价或物价。", 
        defEn: "Stabilize (market prices)", 
        defBm: "Menstabilkan harga", 
        example: "主管部门适时投放战略储备肉菜，以平抑佳节前夕飙升的物价。" 
    },
    { 
        word: "外贸", 
        pinyin: "wài mào", 
        defZh: "对外贸易的缩略语，跨国进出口交易。", 
        defEn: "Foreign trade", 
        defBm: "Perdagangan luar", 
        example: "港口货物吞吐量的激增彰显了国家外贸业务的强劲复苏。" 
    },
    { 
        word: "艰辛", 
        pinyin: "jiān xīn", 
        defZh: "艰难辛苦、历经磨难。", 
        defEn: "Hardships / Arduous", 
        defBm: "Kepayahan / Kesukaran", 
        example: "先辈早年背井离乡南来垦荒，一路历经无数未知的艰辛。" 
    },
    { 
        word: "宽恕", 
        pinyin: "kuān shù", 
        defZh: "宽容原谅他人的过失或过错。", 
        defEn: "Forgive / Pardon", 
        defBm: "Memaafkan", 
        example: "见对方认罪悔改诚意十足，受害者选择放下仇恨予以宽恕。" 
    },
    { 
        word: "公允", 
        pinyin: "gōng yǔn", 
        defZh: "客观、公平而恰当，不偏不倚。", 
        defEn: "Fair / Impartial", 
        defBm: "Adil dan saksama", 
        example: "辩论评委席必须抛弃主观先入为主之见，作出公允评判。" 
    },
    { 
        word: "滥权", 
        pinyin: "làn quán", 
        defZh: "滥用权力的缩略语，超越界限私用职权。", 
        defEn: "Abuse of power", 
        defBm: "Penyalahgunaan kuasa", 
        example: "法纪绝不容许个别掌握审批权的高官肆意擅权与滥权。" 
    },
    { 
        word: "史地", 
        pinyin: "shǐ dì", 
        defZh: "历史与地理两门学科的缩略语。", 
        defEn: "History and Geography", 
        defBm: "Sejarah dan Geografi", 
        example: "初中人文学科扎实涵盖了对本国及世界史地知识的普及。" 
    },
    { 
        word: "合资", 
        pinyin: "hé zī", 
        defZh: "多方联合投资出资经营的缩略语。", 
        defEn: "Joint venture", 
        defBm: "Usahasama modal", 
        example: "本地集团与外国跨国企业合资建设了一座新型半导体封装厂。" 
    },
    { 
        word: "联办", 
        pinyin: "lián bàn", 
        defZh: "联合举办、共同承办活动的缩略语。", 
        defEn: "Jointly organize", 
        defBm: "Menganjurkan bersama", 
        example: "本届全马中学生华语诗歌朗诵比赛由三大青年社团联办。" 
    },
    { 
        word: "流感", 
        pinyin: "liú gǎn", 
        defZh: "流行性感冒的缩略语。", 
        defEn: "Influenza / Flu", 
        defBm: "Selsema burung / Influenza", 
        example: "转季时分气温忽冷忽热，最容易引发呼吸系统流感蔓延。" 
    },
    { 
        word: "履职", 
        pinyin: "lǚ zhí", 
        defZh: "履行职责与岗位责任的缩略语。", 
        defEn: "Perform duties / Discharge responsibilities", 
        defBm: "Menjalankan tugas", 
        example: "身为公仆理当守土有责，全心全意履职以造福一方社群。" 
    },
    { 
        word: "洽商", 
        pinyin: "qià shāng", 
        defZh: "接触接洽并商谈具体事项。", 
        defEn: "Negotiate / Consult with", 
        defBm: "Berunding / Berbincang", 
        example: "双方商务团队已就采购价格与交货期开展深入的闭门洽商。" 
    },
    { 
        word: "知情", 
        pinyin: "zhī qíng", 
        defZh: "了解、知晓事情的真实原委。", 
        defEn: "In the know / Aware of the facts", 
        defBm: "Mengetahui keadaan sebenar", 
        example: "案发当时只有在场值守的几名巡警真正知情。" 
    },
    { 
        word: "廉洁", 
        pinyin: "lián jié", 
        defZh: "清廉、不贪婪自律自守。", 
        defEn: "Honest and upright / Incorruptible", 
        defBm: "Jujur dan amanah / Bersih dari rasuah", 
        example: "为政之本贵在清廉，执法官员必须时刻谨守廉洁自律原则。" 
    },
    { 
        word: "顿悟", 
        pinyin: "dùn wù", 
        defZh: "突然理解、彻底明白道理。", 
        defEn: "Sudden realization / Epiphany", 
        defBm: "Tiba-tiba faham / Kesedaran mendalam", 
        example: "听完长者一番发人深省的点拨，他猛然顿悟、消解了心中困惑。" 
    },
    { 
        word: "记过", 
        pinyin: "jì guò", 
        defZh: "作为惩戒记录在案的处分方式。", 
        defEn: "Record a demerit / Disciplinary sanction", 
        defBm: "Mencatat kesalahan tatatertib", 
        example: "该学生因多次故意旷课并带头起哄，被训导处处以记过惩处。" 
    },
    { 
        word: "低碳", 
        pinyin: "dī tàn", 
        defZh: "指二氧化碳排放量较低的生产生活方式。", 
        defEn: "Low carbon", 
        defBm: "Rendah karbon", 
        example: "倡导骑自行车短途通勤是构建绿色低碳宜居城市的重要一环。" 
    },
    { 
        word: "面谈", 
        pinyin: "miàn tán", 
        defZh: "面对面当面交谈商讨。", 
        defEn: "Face-to-face talk / Interview", 
        defBm: "Temu duga bersemuka", 
        example: "人事主管在初筛简历后，通知初选合格者前来公司进行面谈。" 
    },
    { 
        word: "表态", 
        pinyin: "biǎo tài", 
        defZh: "明确表达自己的立场或态度。", 
        defEn: "Make one's stance clear", 
        defBm: "Menyatakan pendirian", 
        example: "针对议案的关键修改，各大阵营必须在期限内向公众明确表态。" 
    },
    { 
        word: "盲从", 
        pinyin: "máng cóng", 
        defZh: "不加思考分析而盲目跟从他人。", 
        defEn: "Blindly follow / Conform uncritically", 
        defBm: "Mengikut secara membuta tuli", 
        example: "身处信息泛滥时代，青年人更应具备审辨力，切莫随波盲从。" 
    },
    { 
        word: "达标", 
        pinyin: "dá biāo", 
        defZh: "达到规定的指标或标准要求。", 
        defEn: "Reach the required standard", 
        defBm: "Mencapai piawaian", 
        example: "新出厂的防护设备经过十道检验程序，各项指标全部达标。" 
    },
    { 
        word: "密谋", 
        pinyin: "mì móu", 
        defZh: "秘密地商议与策划行动。", 
        defEn: "Conspire / Plot secretly", 
        defBm: "Merancang secara rahsia", 
        example: "几个恶徒在暗巷里密谋抢劫金铺，却不知其行踪已被警方掌控。" 
    },
    { 
        word: "缅怀", 
        pinyin: "miǎn huái", 
        defZh: "深情追忆追思先烈或过往的人事。", 
        defEn: "Commemorate / Cherish the memory of", 
        defBm: "Mengenang kembali jasa", 
        example: "华社同仁每年齐聚先烈丰碑前，肃立缅怀先贤拓荒的无私功业。" 
    },
    { 
        word: "洞悉", 
        pinyin: "dòng xī", 
        defZh: "极其敏锐透彻地察觉与看透本质。", 
        defEn: "See through / Have keen insight into", 
        defBm: "Melihat dan memahami sepenuhnya", 
        example: "经验丰富的巡捕一眼便能洞悉嫌犯口供中欲盖弥彰的破绽。" 
    },
    { 
        word: "民生", 
        pinyin: "mín shēng", 
        defZh: "人民大众的日常生活与基本生计。", 
        defEn: "People's livelihood", 
        defBm: "Kebajikan hidup rakyat", 
        example: "改善偏远内陆的水电与交通是保障基本民生的核心抓手。" 
    },
    { 
        word: "民意", 
        pinyin: "mín yì", 
        defZh: "人民群众的愿望、呼声与普遍意愿。", 
        defEn: "Public opinion / Popular will", 
        defBm: "Suara hati rakyat / Pendapat umum", 
        example: "推行任何重大工程政策前，政府都应当开通公听管道顺应民意。" 
    },
    { 
        word: "寿险", 
        pinyin: "shòu xiǎn", 
        defZh: "人寿保险的缩略语。", 
        defEn: "Life insurance", 
        defBm: "Insurans hayat", 
        example: "及早为家庭经济支柱配置一份足额寿险，能有效规避意外风险。" 
    },
    { 
        word: "认知", 
        pinyin: "rèn zhī", 
        defZh: "通过思维去了解、感知与掌握事物。", 
        defEn: "Cognition / Awareness", 
        defBm: "Kognisi / Kesedaran ilmu", 
        example: "广泛涉猎哲学与人文书籍，能不断刷新一个人的思想认知。" 
    },
    { 
        word: "服从", 
        pinyin: "fú cóng", 
        defZh: "遵照、听从命令或权威指挥。", 
        defEn: "Obey / Subordinate to", 
        defBm: "Patuh / Taat kepada arahan", 
        example: "纪律部队训练营中，每位新兵受训时都必须绝对服从号令。" 
    },
    { 
        word: "人资", 
        pinyin: "rén zī", 
        defZh: "人力资源或人才资源的缩略语。", 
        defEn: "Human resources (HR)", 
        defBm: "Sumber manusia", 
        example: "跨国科技巨头设立专业人资部门，专职物色与留住高精尖人才。" 
    },
    { 
        word: "融入", 
        pinyin: "róng rù", 
        defZh: "与周围的人群、社会或环境融合为一体。", 
        defEn: "Integrate into / Blend in", 
        defBm: "Menyesuaikan diri / Berintegrasi", 
        example: "初来乍到的海外侨胞虚心学习当地语，迅速融入了本地社群。" 
    },
    { 
        word: "隐忍", 
        pinyin: "yǐn rěn", 
        defZh: "将痛苦、愤怒强压在心底，克制忍耐。", 
        defEn: "Endure in silence / Bear with restraint", 
        defBm: "Menahan sabar secara tersembunyi", 
        example: "为了不打破和谈大局，他强压委屈与怒火，选择了暗自隐忍。" 
    },
    { 
        word: "生化", 
        pinyin: "shēng huà", 
        defZh: "生物化学的缩略语。", 
        defEn: "Biochemical", 
        defBm: "Biokimia", 
        example: "这类剧毒生化废料必须由专车运往特定密封库进行中和处理。" 
    },
    { 
        word: "少儿", 
        pinyin: "shào ér", 
        defZh: "少年和儿童的统称缩略语。", 
        defEn: "Children and youth", 
        defBm: "Kanak-kanak dan remaja", 
        example: "这家社区阅览室专门针对少儿读者采购了数千册立体绘本。" 
    },
    { 
        word: "世卫", 
        pinyin: "shì wèi", 
        defZh: "世界卫生组织的常用缩略语。", 
        defEn: "WHO (World Health Organization)", 
        defBm: "WHO (Pertubuhan Kesihatan Sedunia)", 
        example: "世卫官员多次敦促各国强化公共医疗储备以防新一轮未知病毒。" 
    },
    { 
        word: "声控", 
        pinyin: "shēng kòng", 
        defZh: "声音控制、声波感应操控的缩略语。", 
        defEn: "Voice-activated / Sound-controlled", 
        defBm: "Kawalan suara", 
        example: "走廊里安装了声控节能灯泡，感应到脚步声后会自动点亮。" 
    },
    { 
        word: "灾情", 
        pinyin: "zāi qíng", 
        defZh: "遭受灾害的严重程度与现况。", 
        defEn: "Disaster situation", 
        defBm: "Keadaan bencana", 
        example: "连续降雨引发河堤崩决，下游数个甘榜的灾情进一步加重。" 
    },
    { 
        word: "灾黎", 
        pinyin: "zāi lí", 
        defZh: "受灾难侵害的民众、难民灾民。", 
        defEn: "Disaster victims", 
        defBm: "Mangsa bencana", 
        example: "大卡车载着棉被和净水，火速分发至安置中心里的各户灾黎。" 
    },
    { 
        word: "体检", 
        pinyin: "tǐ jiǎn", 
        defZh: "身体健康检查的缩略语。", 
        defEn: "Physical examination / Medical checkup", 
        defBm: "Pemeriksaan fizikal / Kesihatan", 
        example: "长辈宜每年定期前往诊所接受体检，做到无病早防有病早医。" 
    },
    { 
        word: "践行", 
        pinyin: "jiàn xíng", 
        defZh: "身体力行，用实际行动去履行诺言或理念。", 
        defEn: "Practice personally / Fulfill through action", 
        defBm: "Mempraktikkan sendiri", 
        example: "诚信不该停留于空洞口号，每名青年皆当在待人接物中切实践行。" 
    },
    { 
        word: "归纳", 
        pinyin: "guī nà", 
        defZh: "将分散零碎的事物或信息分类、整理并总结。", 
        defEn: "Induce / Sum up / Categorize", 
        defBm: "Merumuskan / Menyimpulkan", 
        example: "概述题必须先从文中抽离细枝末节，归纳出核心事实要点。" 
    },
    { 
        word: "商讨", 
        pinyin: "shāng tǎo", 
        defZh: "共同商议探讨以求得共识或解决对策。", 
        defEn: "Discuss / Deliberate", 
        defBm: "Membincangkan / Berunding", 
        example: "筹委会董事齐聚一室，紧急商讨校庆筹募扩建资金的新方案。" 
    },
    { 
        word: "慎思", 
        pinyin: "shèn sī", 
        defZh: "审慎思考、周密斟酌权衡。", 
        defEn: "Think prudently / Weigh carefully", 
        defBm: "Berfikir dengan teliti dan berwaspada", 
        example: "面对错综复杂的升学专业抉择，务须结合自身特长多加慎思。" 
    },
    { 
        word: "施援", 
        pinyin: "shī yuán", 
        defZh: "伸出援手给予援助与支持。", 
        defEn: "Extend assistance / Lend a helping hand", 
        defBm: "Menghulurkan bantuan", 
        example: "水灾当前，社会各方非政府机构与义工第一时间自发赶赴施援。" 
    },
    { 
        word: "组建", 
        pinyin: "zǔ jiàn", 
        defZh: "组织并建立新部门、机构或队伍。", 
        defEn: "Form / Set up / Establish", 
        defBm: "Menubuhkan / Membentuk", 
        example: "为了攻克技术短板，研究院迅速组建起一支青年骨干先锋队。" 
    },
    { 
        word: "气馁", 
        pinyin: "qì něi", 
        defZh: "丧失勇气与信心，灰心沮丧。", 
        defEn: "Discouraged / Lose heart", 
        defBm: "Patah semangat / Berputus asa", 
        example: "一两次小考成绩不理想切莫气馁，认真反思错漏定能重振旗鼓。" 
    },
    { 
        word: "审判", 
        pinyin: "shěn pàn", 
        defZh: "法院对涉及案件审理并作出判决。", 
        defEn: "Judicial trial / Adjudication", 
        defBm: "Perbicaraan kehakiman", 
        example: "天网恢恢疏而不漏，涉嫌侵吞公款的主谋终被押上法庭接受审判。" 
    },
    { 
        word: "滞销", 
        pinyin: "zhì xiāo", 
        defZh: "货物积压、销路不畅难以售出。", 
        defEn: "Unsalable / Slow-selling goods", 
        defBm: "Tidak laku / Terbiar tidak terjual", 
        example: "突如其来的航运中断使得大量应季新鲜热带水果在码头滞销。" 
    },
    { 
        word: "拼搏", 
        pinyin: "pīn bó", 
        defZh: "拼尽全力去拼搏抗争或争取胜利。", 
        defEn: "Struggle hard / Fight hard", 
        defBm: "Berjuang habis-habisan", 
        example: "哪怕比分落后，场上队员们依然顽强拼搏直到最后一秒哨响。" 
    },
    { 
        word: "立范", 
        pinyin: "lì fàn", 
        defZh: "树立典范、树立优良的榜样。", 
        defEn: "Set a good example / Establish a model", 
        defBm: "Menjadi teladan", 
        example: "为人师表重在言传身教，处处以端正品格为青年学子立范。" 
    },
    { 
        word: "尽孝", 
        pinyin: "jìn xiào", 
        defZh: "尽心竭力侍奉、孝敬父母长辈。", 
        defEn: "Fulfill filial duty", 
        defBm: "Berbakti kepada ibu bapa", 
        example: "工作再繁忙，身为人子也当常回家探望老人以善意尽孝。" 
    },
    { 
        word: "徇私", 
        pinyin: "xùn sī", 
        defZh: "为了私情私利而违背原则公法。", 
        defEn: "Practice nepotism / Act out of personal favoritism", 
        defBm: "Bertindak demi kepentingan peribadi", 
        example: "凡握有考评核准权柄者，绝不容许心存杂念、徇私舞弊。" 
    },
    { 
        word: "挥霍", 
        pinyin: "huī huò", 
        defZh: "任意乱花钱财、毫无节制地浪费。", 
        defEn: "Squander / Spend money lavishly", 
        defBm: "Membazir / Berbelanja boros", 
        example: "虽家底丰裕，但若这般终日肆意挥霍，终有坐吃山空的一天。" 
    },
    { 
        word: "享誉", 
        pinyin: "xiǎng yù", 
        defZh: "在社会或行业间享有极高的盛誉名望。", 
        defEn: "Enjoy high reputation / Renowned", 
        defBm: "Masyhur / Terkenal", 
        example: "这所独资创办的百年名校，以严谨校风享誉全马文教各界。" 
    },
    { 
        word: "疏散", 
        pinyin: "shū sàn", 
        defZh: "把人群由险境分批撤离转移到安全地带。", 
        defEn: "Evacuate", 
        defBm: "Memindahkan / Mengosongkan kawasan", 
        example: "警报鸣响后，全校师生按照平时演练的消防通道有序疏散。" 
    },
    { 
        word: "肃穆", 
        pinyin: "sù mù", 
        defZh: "庄严肃穆、令人肃然起敬的气氛。", 
        defEn: "Solemn and respectful / Serene", 
        defBm: "Khusyuk dan tenang / Khidmat", 
        example: "在悼念因公殉职救火勇士的仪式上，礼堂内全场肃穆无声。" 
    },
    { 
        word: "贪渎", 
        pinyin: "tān dú", 
        defZh: "贪污腐化、玩忽渎职以侵吞公家利益。", 
        defEn: "Graft and malfeasance / Corruption", 
        defBm: "Rasuah dan salah guna kuasa", 
        example: "反贪专员雷厉风行，誓言彻底肃清潜伏在系统内部的贪渎蛀虫。" 
    },
    { 
        word: "通胀", 
        pinyin: "tōng zhàng", 
        defZh: "通货膨胀的缩略语，货币贬值物价持续上涨。", 
        defEn: "Inflation", 
        defBm: "Inflasi", 
        example: "全球供应链受阻推高了能源成本，加剧了本季度的输入型通胀。" 
    },
    { 
        word: "通缩", 
        pinyin: "tōng suō", 
        defZh: "通货紧缩的缩略语，物价普遍持续下跌萎靡。", 
        defEn: "Deflation", 
        defBm: "Deflasi", 
        example: "消费意愿持续低迷会使市场深陷通缩恶性循环，抑制产业投资。" 
    },
    { 
        word: "统考", 
        pinyin: "tǒng kǎo", 
        defZh: "统一考试的缩略语（如马来西亚华文独中统考）。", 
        defEn: "Unified Examination (UEC)", 
        defBm: "Peperiksaan Bersama (UEC)", 
        example: "高三学子连月刻苦刷题复习，全力以赴迎接年底的独中统考。" 
    },
    { 
        word: "增效", 
        pinyin: "zēng xiào", 
        defZh: "提高效益与生产运作效率的缩略语。", 
        defEn: "Increase efficiency and effectiveness", 
        defBm: "Meningkatkan kecekapan", 
        example: "车间推行数码化管理制度后，顺利实现了降本与增效的双重目标。" 
    },
    { 
        word: "防备", 
        pinyin: "fáng bèi", 
        defZh: "事先做好准备以防止灾害或侵害。", 
        defEn: "Take precautions against / Guard against", 
        defBm: "Berjaga-jaga / Langkah berjaga", 
        example: "气象部门提前发出风暴橙色警报，叮嘱沿海渔民进港防备。" 
    },
    { 
        word: "场馆", 
        pinyin: "chǎng guǎn", 
        defZh: "体育场与室内综合展览馆的统称缩略语。", 
        defEn: "Stadium and arena / Venue", 
        defBm: "Stadium dan dewan acara", 
        example: "本届全州学联赛的决赛全部安排在刚竣工的综合性场馆内进行。" 
    },
    { 
        word: "调停", 
        pinyin: "tiáo tíng", 
        defZh: "在争端双方之间周旋劝解以平息冲突。", 
        defEn: "Mediate / Arbitrate", 
        defBm: "Mendamaikan pihak yang bersengketa", 
        example: "资深调解员主动出面调停，最终使剑拔弩张的两家商户各退一步。" 
    },
    { 
        word: "推诿", 
        pinyin: "tuī wěi", 
        defZh: "把自身的责任或过错推卸给他人。", 
        defEn: "Shirk responsibility / Shift the blame", 
        defBm: "Melepaskan tanggungjawab / Menolak salah", 
        example: "面对项目进度延误，团队应当共担责任，而不是相互推诿责备。" 
    },
    { 
        word: "探索", 
        pinyin: "tàn suǒ", 
        defZh: "多方探究寻找真相或开辟新领域。", 
        defEn: "Explore / Probe", 
        defBm: "Meneroka / Menyelidik", 
        example: "年轻科研人员不惧失败，日夜在微观物理未知的领域中勇敢探索。" 
    },
    { 
        word: "决裂", 
        pinyin: "jué liè", 
        defZh: "谈判彻底破裂或关系彻底闹翻。", 
        defEn: "Break off relations / Rupture", 
        defBm: "Putus hubungan / Pecah", 
        example: "两家公司因核心利润分配争执不下，维持十年的伙伴关系宣告决裂。" 
    },
    { 
        word: "改过", 
        pinyin: "gǎi guò", 
        defZh: "痛改前非、改正过往的失误或恶行。", 
        defEn: "Correct errors / Turn over a new leaf", 
        defBm: "Bertaubat / Memperbaiki kesalahan", 
        example: "知耻近乎勇，只要误入歧途的青年真心立志改过，社会当予宽待。" 
    },
    { 
        word: "共甘苦", 
        pinyin: "gòng gān kǔ", 
        defZh: "同甘共苦的缩略语，共同承担艰难与荣耀。", 
        defEn: "Share weal and woe", 
        defBm: "Susah senang bersama", 
        example: "创业初期举步维艰，全体创始成员誓死共甘苦，终迎破茧重生。" 
    },
    { 
        word: "取巧", 
        pinyin: "qǔ qiǎo", 
        defZh: "走捷径、用投机钻营的方法获取利益。", 
        defEn: "Take shortcuts / Resort to trickery", 
        defBm: "Mencari jalan pintas secara licik", 
        example: "学习需要稳扎稳打一步一个脚印，抱侥幸心理投机取巧终会害了自己。" 
    },
    { 
        word: "贪腐", 
        pinyin: "tān fǔ", 
        defZh: "贪污腐败的缩略语。", 
        defEn: "Corruption", 
        defBm: "Rasuah dan salah guna", 
        example: "司法机关出重拳狠抓贪腐，查扣了数名落马贪官的大批隐匿豪产。" 
    },
    { 
        word: "崇俭", 
        pinyin: "chóng jiǎn", 
        defZh: "推崇节俭、崇尚俭朴风尚的缩略语。", 
        defEn: "Advocate frugality", 
        defBm: "Mengamalkan sifat jimat cermat", 
        example: "古训有云勤俭持家，民间不论贫富皆当倡导崇俭去奢的优良美德。" 
    },
    { 
        word: "恤民", 
        pinyin: "xù mín", 
        defZh: "体察民意、体恤百姓疾苦的缩略语。", 
        defEn: "Sympathize with people / Care for the needy", 
        defBm: "Prihatin terhadap rakyat miskin", 
        example: "贤明清官微服巡查四乡，其根本初衷全在察验民情与真诚恤民。" 
    },
    { 
        word: "聪颖", 
        pinyin: "cōng yǐng", 
        defZh: "天资聪敏颖悟、智力超群。", 
        defEn: "Intelligent / Clever", 
        defBm: "Cerdik / Pintar", 
        example: "这名自闭症少年天资聪颖，对复杂的几何模型具备超常记忆力。" 
    },
    { 
        word: "停职", 
        pinyin: "tíng zhí", 
        defZh: "停止职务以反省或配合案件调查。", 
        defEn: "Suspend from duty", 
        defBm: "Digantung tugas", 
        example: "涉嫌在采购审批环节违规操作的主管，即日起被勒令停职受查。" 
    },
    { 
        word: "淘汰", 
        pinyin: "táo tài", 
        defZh: "剔除清洗无用、落后或竞争失败的成分。", 
        defEn: "Eliminate / Weed out", 
        defBm: "Tersingkir / Menghapuskan yang lapuk", 
        example: "产业升级大潮势如破竹，高污染高能耗的传统产能必将被无情淘汰。" 
    },
    { 
        word: "齐心", 
        pinyin: "qí xīn", 
        defZh: "齐心协力、同心同德团结一致。", 
        defEn: "Of one mind / United in purpose", 
        defBm: "Sehati sejiwa / Sepakat", 
        example: "大难当头唯有举国上下携手齐心，才能筑起抵御大洪水的长堤。" 
    },
    { 
        word: "调遣", 
        pinyin: "diào qiǎn", 
        defZh: "调动派遣人员或队伍执行指定任务。", 
        defEn: "Dispatch / Deploy", 
        defBm: "Mengarahkan penempatan / Mengerah", 
        example: "统帅临危不乱，迅速调遣先锋骑兵堵住了被敌军撕开的城防缺口。" 
    },
    { 
        word: "报恩", 
        pinyin: "bào ēn", 
        defZh: "知恩还情、报答他人给予的恩德。", 
        defEn: "Repay kindness / Gratitude", 
        defBm: "Membalas budi", 
        example: "青年学成名就之后回到偏远贫民窟行医，用实际行动向母校报恩。" 
    },
    { 
        word: "让步", 
        pinyin: "ràng bù", 
        defZh: "在争执或谈判中妥协以迁就对方。", 
        defEn: "Make a concession / Yield", 
        defBm: "Beralah / Memberi kelonggaran", 
        example: "若双方在核心诉求上皆坚决不作让步，此轮谈判便注定无疾而终。" 
    },
    { 
        word: "外长", 
        pinyin: "wài zhǎng", 
        defZh: "外交部长的缩略语。", 
        defEn: "Foreign Minister", 
        defBm: "Menteri Luar Negeri", 
        example: "东盟多国外长在峰会期间发表联合公报，重申区域和平中立立场。" 
    },
    { 
        word: "网店", 
        pinyin: "wǎng diàn", 
        defZh: "网络商店、网上商铺的缩略语。", 
        defEn: "Online shop", 
        defBm: "Kedai dalam talian", 
        example: "手工艺人利用空余时间打理自营网店，把传统刺绣远销到海外。" 
    },
    { 
        word: "违法", 
        pinyin: "wéi fǎ", 
        defZh: "违反国家制定颁布的法律法条。", 
        defEn: "Illegal / Violate the law", 
        defBm: "Menyalahi undang-undang", 
        example: "无论出于何种托词，无牌贩卖国家管制野生动物均属严重违法。" 
    },
    { 
        word: "违规", 
        pinyin: "wéi guī", 
        defZh: "违反规章章程制度或考场纪律。", 
        defEn: "Violate regulations / Breach rules", 
        defBm: "Melanggar peraturan", 
        example: "考生若擅自带入未经核准的智能通讯设备，当场被判作严重违规。" 
    },
    { 
        word: "文教", 
        pinyin: "wén jiào", 
        defZh: "文化与教育事业的统称缩略语。", 
        defEn: "Culture and education", 
        defBm: "Kebudayaan dan pendidikan", 
        example: "华社历代热心先驱前仆后继，为守护本邦文教土壤倾注了毕生心力。" 
    },
    { 
        word: "国人", 
        pinyin: "guó rén", 
        defZh: "本国全体人民、国民的统称缩略语。", 
        defEn: "Compatriots / Citizens", 
        defBm: "Rakyat jelata sesebuah negara", 
        example: "羽球名将在国际公开赛力挫强敌摘桂，令全体热血沸腾的国人振奋。" 
    },
    { 
        word: "维安", 
        pinyin: "wéi ān", 
        defZh: "维护治安、维护社会治安稳定的缩略语。", 
        defEn: "Maintain security / Peacekeeping", 
        defBm: "Memelihara keselamatan", 
        example: "逢大型集会期间，联邦特警被部署在人流密集路口全力执行维安任务。" 
    },
    { 
        word: "派代", 
        pinyin: "pài dài", 
        defZh: "委任派遣代表出席或处理事务的缩略语。", 
        defEn: "Dispatch representative", 
        defBm: "Menghantar wakil", 
        example: "鉴于路途遥远会长抱恙，理事会决议委派派代赴宴递交贺辞。" 
    },
    { 
        word: "悖德", 
        pinyin: "bèi dé", 
        defZh: "违背道德良知、败坏伦常道德。", 
        defEn: "Immoral / Contrary to ethics", 
        defBm: "Bertentangan dengan moral", 
        example: "见危不救反而恶意录制受害者惨状取乐的恶劣举止，实属大肆悖德。" 
    },
    { 
        word: "慰问", 
        pinyin: "wèi wèn", 
        defZh: "向患病、受灾或遇不幸的人表示抚慰挂念。", 
        defEn: "Express sympathy / Extend condolences", 
        defBm: "Menziarahi untuk takziah / Menghiburkan", 
        example: "社区服务队登门走访孤老，送去防寒物资并致以最由衷的关怀慰问。" 
    },
    { 
        word: "完好", 
        pinyin: "wán hǎo", 
        defZh: "没有损坏剥蚀，保持完整状态。", 
        defEn: "Intact / In good condition", 
        defBm: "Elok sempurna / Tidak rosak", 
        example: "虽经历数百年风雨侵蚀，这尊深埋地底的汉代青铜壶依然完好如初。" 
    },
    { 
        word: "险境", 
        pinyin: "xiǎn jìng", 
        defZh: "充满凶险危机的境地或局面。", 
        defEn: "Dangerous situation / Peril", 
        defBm: "Keadaan bahaya / Genting", 
        example: "巡警冒死跳入湍急旋涡中，把身陷绝望险境的孩子一把托出水面。" 
    },
    { 
        word: "逐利", 
        pinyin: "zhú lì", 
        defZh: "一心追求私利、贪图金钱利益。", 
        defEn: "Pursue profits / Profit-driven", 
        defBm: "Mengejar keuntungan semata-mata", 
        example: "商家不可一味唯利是图盲目逐利，而当将消费者的生命健康放于首位。" 
    },
    { 
        word: "伪造", 
        pinyin: "wěi zào", 
        defZh: "弄虚作假，制造假证件假单据以蒙蔽他人。", 
        defEn: "Forge / Counterfeit", 
        defBm: "Memalsukan", 
        example: "被告通过非法手段伪造官方印章和合同，最终被当庭识破法办。" 
    },
    { 
        word: "迁就", 
        pinyin: "qiān jiù", 
        defZh: "委屈自己去配合顺从他人。", 
        defEn: "Accommodate / Yield to", 
        defBm: "Mengalah demi memuaskan orang", 
        example: "真正的友谊讲求彼此坦诚尊重，绝非一方毫无底线地一味低头迁就。" 
    },
    { 
        word: "温饱", 
        pinyin: "wēn bǎo", 
        defZh: "吃饱穿暖，指最基本的生活保障。", 
        defEn: "Adequately fed and clothed / Basic survival", 
        defBm: "Cukup makan dan pakai", 
        example: "扶贫工作的首期目标是确保偏远村落的老弱妇孺解决切实的温饱。" 
    },
    { 
        word: "稳妥", 
        pinyin: "wěn tuǒ", 
        defZh: "稳重可靠、妥当周密，不容易出差错。", 
        defEn: "Safe and reliable / Prudent", 
        defBm: "Selamat dan mantap", 
        example: "在没有充分考察水情之前，暂时封桥等待水位回落是最稳妥的决定。" 
    },
    { 
        word: "民调", 
        pinyin: "mín diào", 
        defZh: "民意测验、问卷调查的缩略语。", 
        defEn: "Opinion poll / Survey", 
        defBm: "Tinjauan pendapat umum", 
        example: "独立智库公布的最新民调显示，市民对整修公共交通的满意度攀升。" 
    },
    { 
        word: "虚度", 
        pinyin: "xū dù", 
        defZh: "碌碌无为、毫无建树地白白浪费时光。", 
        defEn: "Waste time / Idly spend years", 
        defBm: "Mensia-siakan masa", 
        example: "青春黄金年华稍纵即逝，中学生理当刻苦向学切莫任其白白虚度。" 
    },
    { 
        word: "歪曲", 
        pinyin: "wāi qū", 
        defZh: "故意颠倒事实真相，作不符合原意的解说。", 
        defEn: "Distort / Misrepresent", 
        defBm: "Memutarbelitkan kenyataan", 
        example: "不负责任的网民断章取义，恶意歪曲了演讲者对教育改革所作的建言。" 
    },
    { 
        word: "习俗", 
        pinyin: "xí sú", 
        defZh: "风俗习惯、世代沿袭的民间传统习惯。", 
        defEn: "Custom / Convention", 
        defBm: "Adat resam / Tradisi", 
        example: "除夕夜全家围坐吃年夜饭，是华人代代坚守、极其珍视的优良习俗。" 
    },
    { 
        word: "心障", 
        pinyin: "xīn zhàng", 
        defZh: "心理障碍、内心芥蒂的缩略语。", 
        defEn: "Mental block / Psychological barrier", 
        defBm: "Halangan mental", 
        example: "在心理咨询师的悉心开导下，他渐渐走出阴霾、跨越了内心的心障。" 
    },
    { 
        word: "新生代", 
        pinyin: "xīn shēng dài", 
        defZh: "新出生、新成长起来的年轻一代群体。", 
        defEn: "New generation", 
        defBm: "Generasi baharu", 
        example: "伴随智能终端成长起来的新生代，对新兴交互技术的领悟尤为敏捷。" 
    },
    { 
        word: "协商", 
        pinyin: "xié shāng", 
        defZh: "共同商量研讨以取得一致意见。", 
        defEn: "Consult / Negotiate", 
        defBm: "Berunding / Berbincang secara muafakat", 
        example: "业主与市政局经过多次闭门协商，终就历史老街的立面修缮达成默契。" 
    },
    { 
        word: "宣教", 
        pinyin: "xuān jiào", 
        defZh: "宣传教育的缩略语。", 
        defEn: "Propaganda and education / Public awareness", 
        defBm: "Penerangan dan pendidikan", 
        example: "交通安全委员会定期走访中小学开展道路行车安全的专项宣教。" 
    },
    { 
        word: "释嫌", 
        pinyin: "shì xián", 
        defZh: "冰释前嫌、彻底消除彼此积压的猜嫌与怨恨。", 
        defEn: "Clear up misunderstandings / Dispel suspicion", 
        defBm: "Menghapuskan rasa syak / Berdamai semula", 
        example: "经过长辈耐心的调停斡旋，昔日反目成仇的同僚终于握手释嫌。" 
    },
    { 
        word: "借鉴", 
        pinyin: "jiè jiàn", 
        defZh: "汲取、效仿他人的成败得失作为镜鉴参考。", 
        defEn: "Draw lessons from / Learn from others", 
        defBm: "Mengambil iktibar / Menjadikan teladan", 
        example: "本国在推进水资源科学治理体系时，虚心借鉴了邻国的新生水经验。" 
    },
    { 
        word: "伺机", 
        pinyin: "sì jī", 
        defZh: "暗中观察寻找机会以采取行动。", 
        defEn: "Wait for an opportunity / Watch for chance", 
        defBm: "Menunggu peluang", 
        example: "狡猾的野狼潜伏在草丛中一动不动，正伺机扑向掉队的小羊。" 
    },
    { 
        word: "渐进", 
        pinyin: "jiàn jìn", 
        defZh: "按部就班、循序渐进地向前推展。", 
        defEn: "Progress gradually", 
        defBm: "Maju secara beransur-ansur", 
        example: "掌握高难度的编程技能是一个渐进的过程，必须勤练而非急功近利。" 
    },
    { 
        word: "细察", 
        pinyin: "xì chá", 
        defZh: "细微观察、明察秋毫地仔细审视。", 
        defEn: "Observe closely / Examine carefully", 
        defBm: "Meneliti secara terperinci", 
        example: "刑侦专家俯身细察现场残存的微小泥印，敏锐地锁定了嫌疑人的去向。" 
    },
    { 
        word: "制衡", 
        pinyin: "zhì héng", 
        defZh: "互相制约、互相抗衡以防止一方擅权独大。", 
        defEn: "Checks and balances", 
        defBm: "Imbang dan periksa (imbangan kuasa)", 
        example: "健全完备的宪政体制依靠立法、司法与行政机关之间紧密的相互制衡。" 
    },
    { 
        word: "试点", 
        pinyin: "shì diǎn", 
        defZh: "在全面推展某项方案前先行做试验的单位或地区。", 
        defEn: "Pilot project / Experimental spot", 
        defBm: "Projek perintis / Ujian percubaan", 
        example: "全新的电子无纸化课本大纲已先行在首都四所国中作为试点推行。" 
    },
    { 
        word: "逃脱", 
        pinyin: "táo tuō", 
        defZh: "逃跑摆脱法网制裁或摆脱危难羁绊。", 
        defEn: "Escape / Slip away", 
        defBm: "Meloloskan diri", 
        example: "不论匪徒如何狡黠改头换面，在法网恢恢之下终究无法逃脱惩罚。" 
    },
    { 
        word: "耗竭", 
        pinyin: "hào jié", 
        defZh: "资源、精力因过度消耗而宣告彻底用光。", 
        defEn: "Exhausted / Depleted", 
        defBm: "Habis lenyap / Kering", 
        example: "连日连夜在深山背负重物徒步，终使整支探险队的体力濒临耗竭。" 
    },
    { 
        word: "虚心纳言", 
        pinyin: "xū xīn nà yán", 
        defZh: "为人极其谦虚逊退、乐于采纳逆耳良言意见。", 
        defEn: "Open-minded to advice", 
        defBm: "Terbuka menerima teguran", 
        example: "为政领袖唯有做到兼听则明、虚心纳言，方能凝聚民智共渡难关。" 
    },
    { 
        word: "薪酬", 
        pinyin: "xīn chóu", 
        defZh: "提供脑力或体力工作所获得的薪资报酬待遇。", 
        defEn: "Salary and compensation / Remuneration", 
        defBm: "Gaji dan imbuhan", 
        example: "企业向技术骨干提供了极具行业吸引力的高额薪酬与年终奖金。" 
    },
    { 
        word: "通报", 
        pinyin: "tōng bào", 
        defZh: "将重要情况或事实公开发布传达通告。", 
        defEn: "Circulate a notice / Bulletin", 
        defBm: "Pemberitahuan rasmi / Makluman", 
        example: "卫生部针对突发登革热疫区的最新扑灭成果向社会作出了公开通报。" 
    },
    { 
        word: "僵持", 
        pinyin: "jiāng chí", 
        defZh: "双方互不相让，导致形势陷入停滞胶着。", 
        defEn: "Stalemate / Standstill", 
        defBm: "Buntu / Bertegang leher", 
        example: "买卖两造因厂房转让溢价问题互不松口，谈判全面陷入僵持局面。" 
    },
    { 
        word: "现结", 
        pinyin: "xiàn jié", 
        defZh: "当场以现金完成结清交易交付。", 
        defEn: "Cash settlement", 
        defBm: "Bayaran tunai serta-merta", 
        example: "街市摊档一般不支持分期记账，历来习惯一手交货一手现结。" 
    },
    { 
        word: "厌旧", 
        pinyin: "yàn jiù", 
        defZh: "喜新厌旧的缩略语，厌弃老旧事物或故人。", 
        defEn: "Tire of the old", 
        defBm: "Jemu dengan yang lama", 
        example: "为人交友重在厚道忠信，若得新忘故、动辄厌旧，断难结交挚友。" 
    },
    { 
        word: "杜撰", 
        pinyin: "dù zhuàn", 
        defZh: "毫无事实根据，凭空捏造、编造谎言。", 
        defEn: "Fabricate / Make up", 
        defBm: "Mengada-adakan cerita / Mereka cipta", 
        example: "做历史纪实学术考据必须言之成理，严禁不加考证地主观杜撰。" 
    },
    { 
        word: "应允", 
        pinyin: "yīng yǔn", 
        defZh: "痛快答允、答应对方的请求。", 
        defEn: "Consent / Agree to / Promise", 
        defBm: "Bersetuju / Mengizinkan", 
        example: "听闻母校急需筹建图书楼，热心老校友当场慷慨应允捐出十万。" 
    },
    { 
        word: "亚太区", 
        pinyin: "yà tài qū", 
        defZh: "亚洲太平洋区域的统称缩略语。", 
        defEn: "Asia-Pacific region", 
        defBm: "Rantau Asia-Pasifik", 
        example: "得天独厚的马六甲海峡航道，使我国成为亚太区最重要的海运枢纽。" 
    },
    { 
        word: "严禁", 
        pinyin: "yán jìn", 
        defZh: "严格禁止，绝不容许做出某种违规行为。", 
        defEn: "Strictly prohibit / Forbidden", 
        defBm: "Dilarang sama sekali", 
        example: "易燃危险化学品仓库重地，严禁任何人员在此携带明火吸烟。" 
    },
    { 
        word: "恪守", 
        pinyin: "kè shǒu", 
        defZh: "极其严肃、恭敬且严格地遵守法令纪律。", 
        defEn: "Strictly abide by / Adhere to", 
        defBm: "Mematuhi sepenuhnya / Berpegang teguh", 
        example: "每一位合格的行医人员都必须恪守救死扶伤的崇高希波克拉底誓词。" 
    },
    { 
        word: "严惩", 
        pinyin: "yán chéng", 
        defZh: "严加惩办、依法给予极严厉的惩治处分。", 
        defEn: "Severely punish", 
        defBm: "Menghukum dengan berat", 
        example: "对向无辜未成年人走私贩运毒品的暴徒，司法法庭必予严惩不贷。" 
    },
    { 
        word: "严打", 
        pinyin: "yán dǎ", 
        defZh: "依法从重从快、严厉打击违法乱纪犯罪。", 
        defEn: "Crack down severely on", 
        defBm: "Membanteras dengan tegas", 
        example: "全国警方展开代号清道夫的专案行动，重拳严打各类网络博彩团伙。" 
    },
    { 
        word: "义教", 
        pinyin: "yì jiào", 
        defZh: "普及义务教育的缩略语。", 
        defEn: "Compulsory education", 
        defBm: "Pendidikan wajib", 
        example: "落实适龄儿童全面义教，是根除代际贫困的最核心文明举措。" 
    },
    { 
        word: "备考", 
        pinyin: "bèi kǎo", 
        defZh: "准备应试、全力以赴为考试做准备。", 
        defEn: "Prepare for exam", 
        defBm: "Membuat persiapan peperiksaan", 
        example: "学子们熄灯后仍在桌前挑灯夜读，为迎战全国大考而争分夺秒备考。" 
    },
    { 
        word: "有机物", 
        pinyin: "yǒu jī wù", 
        defZh: "有机化合物的缩略语，含碳元素的化合物总称。", 
        defEn: "Organic matter / Organic compound", 
        defBm: "Bahan organik", 
        example: "土壤表层中的微生物能将落叶碎屑加速转化为滋养作物的有机物。" 
    },
    { 
        word: "隐瞒", 
        pinyin: "yǐn mán", 
        defZh: "刻意掩盖事实真相，不向人透露真情。", 
        defEn: "Conceal / Hide the truth", 
        defBm: "Menyembunyikan kebenaran", 
        example: "涉案人员在法庭盘诘时闪烁其词，企图向法官隐瞒关键账目。" 
    },
    { 
        word: "赈灾", 
        pinyin: "zhèn zāi", 
        defZh: "筹措款物援助与救济灾黎灾民。", 
        defEn: "Relieve disaster victims / Disaster relief", 
        defBm: "Menyalurkan bantuan bencana", 
        example: "慈济功德会与大批民间志工火速组织起赈灾车队，挺进汪洋泥沼。" 
    },
    { 
        word: "自律", 
        pinyin: "zì lǜ", 
        defZh: "自己约束自己的言行，自觉遵守规矩。", 
        defEn: "Self-discipline", 
        defBm: "Disiplin kendiri", 
        example: "网络自学时代拉开同龄人差距的关键，正取决于内心强大的自律。" 
    },
    { 
        word: "贻误", 
        pinyin: "yí wù", 
        defZh: "因耽搁迟缓而延误时机或造成不良恶果。", 
        defEn: "Delay and bungle / Bungle through delay", 
        defBm: "Menjejaskan / Menyebabkan kelewatan", 
        example: "遇事若当断不断、患得患失，终将贻误最佳战机导致全盘覆灭。" 
    },
    { 
        word: "伪善", 
        pinyin: "wěi shàn", 
        defZh: "假装善良热心，表面一套背后一套。", 
        defEn: "Hypocritical / Hypocrisy", 
        defBm: "Hipokrit / Pura-pura baik", 
        example: "嘴上挂着仁义慈悲，暗地里却剥削劳工，这种做派令人痛恨的伪善。" 
    },
    { 
        word: "严防", 
        pinyin: "yán fáng", 
        defZh: "严格防范、严加戒备以防危险隐患发生。", 
        defEn: "Guard closely against / Take strict precautions", 
        defBm: "Berwaspada ketat / Mengawal rapi", 
        example: "汛期到来之际，防汛指挥部全员通宵值班以严防江堤决口。" 
    },
    { 
        word: "仰赖", 
        pinyin: "yǎng lài", 
        defZh: "依赖他人或某种客观条件才能立足生存。", 
        defEn: "Rely on / Depend upon", 
        defBm: "Bergantung kepada", 
        example: "自立自强方显人格，切不可成年之后事事依然仰赖年迈双亲照拂。" 
    },
    { 
        word: "诱骗", 
        pinyin: "yòu piàn", 
        defZh: "通过诱导、设诱饵的方式欺骗他人上当。", 
        defEn: "Entice / Lure into fraud", 
        defBm: "Memperdayakan / Memikat untuk menipu", 
        example: "跨国犯罪集团打着海外高薪幌子，暗中诱骗无知青年落入电诈陷阱。" 
    },
    { 
        word: "感恩", 
        pinyin: "gǎn ēn", 
        defZh: "饮水思源、对别人的恩德铭记于心并思回报。", 
        defEn: "Be thankful / Grateful", 
        defBm: "Bersyukur / Berterima kasih", 
        example: "我们要时刻心存感恩，切莫忘记师长父母当年春风化雨的栽培心血。" 
    },
    { 
        word: "瞒报", 
        pinyin: "mán bào", 
        defZh: "隐瞒病情疫情或伤亡事故，不向上级呈报。", 
        defEn: "Conceal and fail to report", 
        defBm: "Menyembunyikan laporan rasmi", 
        example: "厂长因涉嫌在毒气泄漏发生后向主管部门恶意瞒报，被警方拘查。" 
    },
    { 
        word: "创立", 
        pinyin: "chuàng lì", 
        defZh: "应运而生、初次建立成立某机构或理论学说。", 
        defEn: "Found / Establish / Originate", 
        defBm: "Mengasaskan / Menubuhkan", 
        example: "先贤在吉隆坡创立了这所学堂，历经百载风雨造福无数南洋后进。" 
    },
    { 
        word: "踊跃", 
        pinyin: "yǒng yuè", 
        defZh: "情绪高涨热烈、争先恐后地积极参与。", 
        defEn: "Enthusiastically leap at / Eagerly participate", 
        defBm: "Secara aktif dan bersemangat", 
        example: "义卖会征集志愿者的号召甫一张贴，各班同学们便纷纷踊跃报名。" 
    },
    { 
        word: "担当", 
        pinyin: "dān dāng", 
        defZh: "勇于挑起重任、面对困难敢于担承负责。", 
        defEn: "Take on responsibility / Undertake", 
        defBm: "Memikul tanggungjawab dengan berani", 
        example: "遇事不逃避不甩锅，直面逆境去破局，正是当代青年应有的担当。" 
    },
    { 
        word: "忧患", 
        pinyin: "yōu huàn", 
        defZh: "对潜在的灾难困顿保持警惕的忧患意识。", 
        defEn: "Sense of crisis / Forethought for adversity", 
        defBm: "Perasaan bimbang dan berjaga-jaga", 
        example: "生于忧患死于安乐，国家即使处在和平繁荣之际也当时刻怀揣忧患。" 
    },
    { 
        word: "甄选", 
        pinyin: "zhēn xuǎn", 
        defZh: "优胜劣汰、经过仔细考查审核后择优录取。", 
        defEn: "Screen and select / Rigorous selection", 
        defBm: "Memilih dan menapis calon terbaik", 
        example: "经过三轮严苛的专业面试与才艺答辩，评审组最终甄选出了领头羊。" 
    },
    { 
        word: "豁免", 
        pinyin: "huò miǎn", 
        defZh: "宽免免除某种责罚、赋税或法定程序义务。", 
        defEn: "Exempt / Immunity", 
        defBm: "Mengecualikan daripada hukuman", 
        example: "因主动配合检方供出关键证据，污点证人获得了法庭的部分控罪豁免。" 
    },
    { 
        word: "混充", 
        pinyin: "hùn chōng", 
        defZh: "鱼目混珠、用假货劣品冒充真品高质品。", 
        defEn: "Pass off fake goods as genuine", 
        defBm: "Menyamar / Mencampur aduk barang palsu", 
        example: "不良商贩妄图拿低劣的人造革混充优质天然牛皮，被稽查员依法没收。" 
    },
    { 
        word: "引用", 
        pinyin: "yǐn yòng", 
        defZh: "原文照录他人著作言论以作为论据参考。", 
        defEn: "Quote / Cite", 
        defBm: "Memetik kata / Mengambil sumber", 
        example: "书写论说文时，恰如其分地引用先贤经典名言能大大强化论证的说服力。" 
    },
    { 
        word: "激怨", 
        pinyin: "jī yuàn", 
        defZh: "政策欠妥激起普遍民愤、令大众怨声载道。", 
        defEn: "Arouse public resentment / Provoke anger", 
        defBm: "Membangkitkan kemarahan rakyat", 
        example: "地方苛捐杂税层出不穷，朝令夕改终于彻底激怨引得四方抗议。" 
    },
    { 
        word: "约谈", 
        pinyin: "yuē tán", 
        defZh: "主管部门严肃约请当面谈话并予以告诫。", 
        defEn: "Summon for interview / Admonish", 
        defBm: "Memanggil untuk temu duga siasatan", 
        example: "因连续多次发生用户隐私泄漏，网络平台负责人遭监管局传召约谈。" 
    },
    { 
        word: "筹谋", 
        pinyin: "chóu móu", 
        defZh: "运筹帷幄、缜密地计划筹办与运思全盘。", 
        defEn: "Plan carefully / Scheme strategically", 
        defBm: "Merancang strategi dengan teliti", 
        example: "老军师胸有成竹，早已在前线阵地为反击敌军做好了万全筹谋。" 
    },
    { 
        word: "逾期", 
        pinyin: "yú qī", 
        defZh: "超过规定的期限日期尚未交付或归还。", 
        defEn: "Overdue / Exceed the deadline", 
        defBm: "Melepasi tempoh / Tertunggak", 
        example: "借出的图书馆藏书若逾期未还，读者的外借借阅资格将被暂时冻结。" 
    },
    { 
        word: "展销", 
        pinyin: "zhǎn xiāo", 
        defZh: "展出并销售产品的缩略语。", 
        defEn: "Exhibition and sales / Expo", 
        defBm: "Pameran jualan", 
        example: "一年一度的全国农产品展销盛会在市中心会展中心隆重拉开帷幕。" 
    },
    { 
        word: "占地", 
        pinyin: "zhàn dì", 
        defZh: "占用土地或建筑物所占的实际地面面积。", 
        defEn: "Occupy land / Cover an area of", 
        defBm: "Menduduki tanah / Keluasan kawasan", 
        example: "非法私搭乱建的临时铁皮屋肆意占地，严重阻塞了消防逃生通道。" 
    },
    { 
        word: "责编", 
        pinyin: "zé biān", 
        defZh: "报纸刊物出版物责任编辑的统称缩略语。", 
        defEn: "Executive editor / Responsible editor", 
        defBm: "Editor bertugas", 
        example: "稿件付印前必须交由责编反复核校，以确保字句通顺并杜绝病句。" 
    },
    { 
        word: "惜时", 
        pinyin: "xī shí", 
        defZh: "珍惜时间、爱惜宝贵光阴的缩略语。", 
        defEn: "Cherish time / Value time", 
        defBm: "Menghargai masa", 
        example: "一寸光阴一寸金，自律好学的学子最懂得在分秒碎片中勤勉惜时。" 
    },
    { 
        word: "整风", 
        pinyin: "zhěng fēng", 
        defZh: "整顿纪律作风、纠正不良歪风的缩略语。", 
        defEn: "Rectify working style / Clean up trends", 
        defBm: "Membersihkan amalan kerja lapuk", 
        example: "机关开展严肃深入的纪律整风运动，全面清除浮夸与推诿等坏毛病。" 
    },
    { 
        word: "政经文教", 
        pinyin: "zhèng jīng wén jiào", 
        defZh: "政治、经济、文化和教育四大领域的统称。", 
        defEn: "Politics, economy, culture, and education", 
        defBm: "Politik, ekonomi, kebudayaan dan pendidikan", 
        example: "华人先驱在各州落地生根，积极参与了建国时期横跨政经文教的大业。" 
    },
    { 
        word: "政经", 
        pinyin: "zhèng jīng", 
        defZh: "政治与经济两大领域的缩略语。", 
        defEn: "Political and economic", 
        defBm: "Politik dan ekonomi", 
        example: "权威社论定期针对国际政经格局的大动荡、大分化展开深度剖析。" 
    },
    { 
        word: "指控", 
        pinyin: "zhǐ kòng", 
        defZh: "提出指责、控告对方的不法或违规行径。", 
        defEn: "Accuse / Allegation / Charge", 
        defBm: "Mendakwa / Menuduh secara rasmi", 
        example: "检方出示了数份由公证行签字的账目文件，对嫌疑人提出多项指控。" 
    },
    { 
        word: "知青", 
        pinyin: "zhī qīng", 
        defZh: "知识青年的缩略语，有文化的青年群体。", 
        defEn: "Educated youth", 
        defBm: "Pemuda berpendidikan", 
        example: "当年大批知青下乡普及基础识字班，为扫盲事业作出了巨大的贡献。" 
    },
    { 
        word: "智商", 
        pinyin: "zhì shāng", 
        defZh: "智力商数的缩略语，反映个人智力测验水平。", 
        defEn: "IQ (Intelligence Quotient)", 
        defBm: "IQ (Kecerdasan minda)", 
        example: "天生的高智商固然可贵，但日后事业有成往往更仰赖坚毅不拔的韧性。" 
    },
    { 
        word: "情商", 
        pinyin: "qíng shāng", 
        defZh: "情绪商数的缩略语，反映情绪管理与社交能力。", 
        defEn: "EQ (Emotional Quotient)", 
        defBm: "EQ (Kecerdasan emosi)", 
        example: "身处分歧冲突之中，卓越的高情商使他总能春风化雨般化解尴尬局面。" 
    },
    { 
        word: "造势", 
        pinyin: "zào shì", 
        defZh: "制造舆论声势、扩大社会影响力或声浪。", 
        defEn: "Build up momentum / Campaign publicity", 
        defBm: "Mencipta momentum / Menguar-uarkan", 
        example: "新书发布会特意邀请了多位文坛重量级大家齐聚站台，为新篇造势。" 
    },
    { 
        word: "周密", 
        pinyin: "zhōu mì", 
        defZh: "周到细密，计划考虑极其周全无疏漏。", 
        defEn: "Meticulous / Thorough", 
        defBm: "Teliti dan rapi", 
        example: "经过连夜周密且严谨的排查部署，指挥中心终于锁定了排污暗管。" 
    },
    { 
        word: "主因", 
        pinyin: "zhǔ yīn", 
        defZh: "起主导决定作用的核心主要原因。", 
        defEn: "Main reason / Primary cause", 
        defBm: "Punca utama", 
        example: "基础概念模糊与临场紧张慌乱，是导致这几位考生本次失利的主因。" 
    },
    { 
        word: "主次", 
        pinyin: "zhǔ cì", 
        defZh: "主要与次要两部分地位差别的缩略统称。", 
        defEn: "Primary and secondary", 
        defBm: "Utama dan sampingan", 
        example: "在概述作答中要擅长去粗取精，准确梳理出事实叙述中的主次脉络。" 
    },
    { 
        word: "专才", 
        pinyin: "zhuān cái", 
        defZh: "专门人才的缩略语，具备某一学科特长的人才。", 
        defEn: "Specialist / Professional talent", 
        defBm: "Pakar / Tenaga mahir khusus", 
        example: "我国全力发展工业4.0，亟需培养大批通晓微电子与软件的硬核专才。" 
    },
    { 
        word: "专委", 
        pinyin: "zhuān wěi", 
        defZh: "专门工作委员会的缩略语。", 
        defEn: "Special committee", 
        defBm: "Jawatankuasa khas", 
        example: "国会针对日益猖獗的跨境电信欺诈，特别成立了跨党派专委联合彻查。" 
    },
    { 
        word: "自控", 
        pinyin: "zì kòng", 
        defZh: "自动控制的缩略语，亦指自我克制自我控制。", 
        defEn: "Automatic control / Self-control", 
        defBm: "Kawalan automatik / Kawalan diri", 
        example: "现代化汽车制造车间全部改由机械臂配合电脑网络系统实现全程自控。" 
    },
    { 
        word: "总结", 
        pinyin: "zǒng jié", 
        defZh: "对过往全部实践、学习或工作做出系统性回顾。", 
        defEn: "Summarize / Conclusion", 
        defBm: "Merumuskan / Menggulung", 
        example: "大考落幕后，务必拿出试卷仔细比对错题本，认真做好阶段性总结。" 
    },
    { 
        word: "迟疑", 
        pinyin: "chí yí", 
        defZh: "犹豫不决、瞻前顾后迟迟拿不定主意。", 
        defEn: "Hesitate / Indecisive", 
        defBm: "Ragu-ragu / Teragak-agak", 
        example: "关键良机转瞬即逝，面临重大决断时切不可瞻前顾后而过度迟疑。" 
    },
    { 
        word: "根治", 
        pinyin: "gēn zhì", 
        defZh: "斩草除根、从根本上彻底铲除祸患隐患。", 
        defEn: "Cure radically / Eradicate", 
        defBm: "Membasmi hingga ke akar umbi", 
        example: "对待屡禁不绝的校园霸凌，必须以雷霆手段依法治校，方能坚决根治。" 
    },
    { 
        word: "报效", 
        pinyin: "bào xiào", 
        defZh: "资金赞助捐赠以回报母校或社会公益事业。", 
        defEn: "Donate to repay / Render service to", 
        defBm: "Menyumbang bakti", 
        example: "海外侨领不忘故土根基，慷慨为母校捐建大礼堂，此乃真正的报效善举。" 
    },
    { 
        word: "熟稔", 
        pinyin: "shú rěn", 
        defZh: "熟练掌握、对某些事物流程极其熟识清楚。", 
        defEn: "Familiar with / Skilled at", 
        defBm: "Sangat mahir / Sangat fasih", 
        example: "经过长达半年的严苛训练，学徒对各项传统木雕工具的操作已极度熟稔。" 
    },
    { 
        word: "宣告", 
        pinyin: "xuān gào", 
        defZh: "公开宣布、郑重向社会公布重大事件。", 
        defEn: "Declare / Announce formally", 
        defBm: "Mengisytiharkan / Mengumumkan", 
        example: "随着终场哨声吹响，裁判员郑重向全场宣告本届锦标赛圆满闭幕。" 
    },
    { 
        word: "折衷", 
        pinyin: "zhé zhōng", 
        defZh: "调和两造极端意见、兼顾双方各退一步的方案。", 
        defEn: "Compromise / Middle ground", 
        defBm: "Jalan tengah / Kompromi", 
        example: "在双方寸步不让的胶着态势下，调停人提出了一份彼此皆能接受的折衷方案。" 
    },
    { 
        word: "珍藏", 
        pinyin: "zhēn cáng", 
        defZh: "妥善珍惜并保藏有极高价值的物品文献。", 
        defEn: "Treasure / Preserve carefully", 
        defBm: "Menyimpan rapi khazanah berharga", 
        example: "国家档案馆悉心珍藏着当年各族开国领袖联署签署的独立誓词手稿。" 
    },
    { 
        word: "释明", 
        pinyin: "shì míng", 
        defZh: "解释阐明、使原本扑朔迷离的真相大白于天下。", 
        defEn: "Clarify and explain", 
        defBm: "Menerangkan dengan jelas", 
        example: "经过深入调查与确凿物证检验，检方在公听会上对案情做出了全面释明。" 
    },
    { 
        word: "争利", 
        pinyin: "zhēng lì", 
        defZh: "抢夺争夺利益、为了金钱与他人相争。", 
        defEn: "Contend for profits", 
        defBm: "Berebut keuntungan", 
        example: "为政者当以利民安邦为本，断不可依仗公权垄断资源而与民间微商争利。" 
    },
    { 
        word: "征询", 
        pinyin: "zhēng xún", 
        defZh: "向人调查访求并征求意见、听取建议。", 
        defEn: "Consult / Solicit opinions", 
        defBm: "Meminta pandangan / Berunding", 
        example: "市政厅在落实单向道改道措施之前，特地走访当地商家以广泛征询民意。" 
    },
    { 
        word: "繁盛", 
        pinyin: "fán shèng", 
        defZh: "蒸蒸日上、蓬勃旺盛发展的繁荣景象。", 
        defEn: "Prosperous / Flourishing", 
        defBm: "Makmur dan berkembang pesat", 
        example: "优越的地理位置与利好经贸政策，推动了海港工业园一片欣欣向荣的繁盛。" 
    },
    { 
        word: "顽固", 
        pinyin: "wán gù", 
        defZh: "顽固不化、思想陈旧僵化且坚持错误。", 
        defEn: "Stubborn / Obstinate", 
        defBm: "Degil / Keras kepala", 
        example: "哪怕事实胜于雄辩，顽固者依然执迷不悟，坚决不肯承认自身的偏颇。" 
    },
    { 
        word: "调度", 
        pinyin: "diào dù", 
        defZh: "临场从容指挥、安排人力车辆与物资。", 
        defEn: "Dispatch / Coordinate operations", 
        defBm: "Mengatur dan menyelia operasi", 
        example: "总指挥在发生严重大堵车的十字路口临危不乱，从容完成对各路交警的调度。" 
    },
    { 
        word: "效忠", 
        pinyin: "xiào zhōng", 
        defZh: "坚守忠贞、全心全意贡献忠诚与力量。", 
        defEn: "Pledge allegiance / Be loyal to", 
        defBm: "Taat setia kepada", 
        example: "国庆检阅礼上，三军将士昂首挺胸庄严宣誓，誓死效忠君国与全体人民。" 
    },
    { 
        word: "终身获益", 
        pinyin: "zhōng shēn huò yì", 
        defZh: "终生受用不尽、一辈子都能获得益处。", 
        defEn: "Benefit for a lifetime", 
        defBm: "Mendapat manfaat seumur hidup", 
        example: "在中学生涯培养出严谨的自律习惯与阅读素养，必将让你在往后终身获益。" 
    },
    { 
        word: "熟知", 
        pinyin: "shú zhī", 
        defZh: "众所周知、人人尽皆非常清楚与知晓。", 
        defEn: "Well-known / Familiar to all", 
        defBm: "Diketahui ramai / Amat maklum", 
        example: "先贤开荒拓土筑就繁华港邑的历史，乃是本地全体国民尽皆熟知的事实。" 
    },
    { 
        word: "调整", 
        pinyin: "tiáo zhěng", 
        defZh: "重新部署规划、理顺改变现状以适应要求。", 
        defEn: "Adjust / Reorganize", 
        defBm: "Menyesuaikan / Mengubah suai", 
        example: "面对瞬息万变的全球原油波动，船务集团果断对全年度的航运路线展开调整。" 
    },
    { 
        word: "彻查", 
        pinyin: "chè chá", 
        defZh: "追查到底、深入而全面地调查清楚内情。", 
        defEn: "Investigate thoroughly", 
        defBm: "Menyiasat sehingga ke akar umbi", 
        example: "对造成水库源头遭到严重化学废液污染的恶性元凶，环境局发誓务必彻查。" 
    },
    { 
        word: "拮据", 
        pinyin: "jié jū", 
        defZh: "捉襟见肘、手头缺少金钱，生活经济极其窘迫。", 
        defEn: "Hard up / Tight on money", 
        defBm: "Sempit hidup / Kekurangan wang", 
        example: "突如其来的失业使原本就不富裕的家庭储蓄告罄，日常生活顿时陷入拮据。" 
    },
    { 
        word: "自立", 
        pinyin: "zì lì", 
        defZh: "自食其力、不依靠他人而独立生活谋生。", 
        defEn: "Independent / Stand on one's own feet", 
        defBm: "Berdikari", 
        example: "虽自幼身带轻微肢体残疾，他依然靠一双巧手摆摊制鞋，誓图挺起脊梁自立。" 
    },
    { 
        word: "抵触", 
        pinyin: "dǐ chù", 
        defZh: "相互矛盾冲撞、言行不一致或违背规定。", 
        defEn: "Conflict with / Contradict", 
        defBm: "Bercanggah / Bertentangan", 
        example: "地方条例所制定的行政细则，绝不可与国家宪法最高法则发生任何抵触。" 
    },
    { 
        word: "穷途", 
        pinyin: "qióng tú", 
        defZh: "走投无路、身陷没有出路的极端绝境。", 
        defEn: "Dead end / Blind alley / Dire straits", 
        defBm: "Jalan buntu / Kehabisan ikhtiar", 
        example: "在巨额赌债与法律通缉的双重夹击下，亡命赌徒几乎彻底陷入了人生穷途。" 
    },
    { 
        word: "阻滞", 
        pinyin: "zǔ zhì", 
        defZh: "阻碍发展阻碍通行，形成停滞不前。", 
        defEn: "Obstruct / Impede progress", 
        defBm: "Menyekat / Membantutkan kemajuan", 
        example: "陈旧繁琐的官僚盖印程序严重阻滞了海外绿色创新资本进驻本邦的进度。" 
    },
    { 
        word: "欺压", 
        pinyin: "qī yā", 
        defZh: "倚仗权势作威作福，欺凌压迫弱小群体。", 
        defEn: "Bully and oppress", 
        defBm: "Menindas / Membuli", 
        example: "村霸依仗有当地恶势力撑腰在市集横行霸道、欺压摊贩，终被警署一网打尽。" 
    }
];

// 将数据暴露为全局变量
var allIdioms = vocabularyData;
