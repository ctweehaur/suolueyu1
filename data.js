const vocabularyData = [
    { 
        word: "争夺利益=争利", 
        pinyin: "zhēng duó lì yì = zhēng lì", 
        defZh: "抢夺、争求自身利益，在概述中用来压缩表述。", 
        defEn: "Contend for profits", 
        defBm: "Berebut keuntungan", 
        example: "大企业不应滥用垄断地位，与民间小商贩争夺利益。 → 大企业不应与民争利。" 
    },
    { 
        word: "解释阐明=释明", 
        pinyin: "jiě shì chǎn míng = shì míng", 
        defZh: "进行分析说明，使事实清晰明朗。", 
        defEn: "Clarify and explain", 
        defBm: "Menerangkan dengan jelas", 
        example: "发言人就最新政策条款向公众做出解释阐明。 → 发言人向公众释明政策。" 
    },
    { 
        word: "安全检查=安检", 
        pinyin: "ān quán jiǎn chá = ān jiǎn", 
        defZh: "为了防范事故与危害所实施的检查程序。", 
        defEn: "Security check", 
        defBm: "Pemeriksaan keselamatan", 
        example: "进入候机大厅前所有人须配合安全检查。 → 进厅前须配合安检。" 
    },
    { 
        word: "摆脱贫困=脱贫", 
        pinyin: "bǎi tuō pín kùn = tuō pín", 
        defZh: "摆脱生活贫乏的境地，走向生活富足。", 
        defEn: "Alleviate poverty / Rise out of poverty", 
        defBm: "Keluar daripada kemiskinan", 
        example: "村民通过种植经济作物逐步摆脱贫困。 → 村民借种植逐步脱贫。" 
    },
    { 
        word: "保护健康=保健", 
        pinyin: "bǎo hù jiàn kāng = bǎo jiàn", 
        defZh: "维护和增进机体健康状态。", 
        defEn: "Health care", 
        defBm: "Penjagaan kesihatan", 
        example: "长者在日常生活中尤为注重保护健康。 → 长者日常注重保健。" 
    },
    { 
        word: "保留存根=备查", 
        pinyin: "bǎo liú cún gēn = bèi chá", 
        defZh: "将票据或文件留底以供日后查验。", 
        defEn: "Keep for future reference", 
        defBm: "Disimpan untuk rujukan", 
        example: "办事员把报销单据复印一份保留存根。 → 办事员复印单据备查。" 
    },
    { 
        word: "不良风气=歪风", 
        pinyin: "bù liáng fēng qì = wāi fēng", 
        defZh: "违反纪律、道德的不良习惯和风尚。", 
        defEn: "Unhealthy trend / Bad practice", 
        defBm: "Gejala negatif / Budaya buruk", 
        example: "校方坚决遏制学生旷课成群的不良风气。 → 校方坚决遏制旷课歪风。" 
    },
    { 
        word: "表达谢意=致谢", 
        pinyin: "biǎo dá xiè yì = zhì xiè", 
        defZh: "用言辞或行动向他人表示感谢。", 
        defEn: "Express gratitude / Say thanks", 
        defBm: "Menyampaikan ucapan terima kasih", 
        example: "灾民特地登门向志愿搜救队表达谢意。 → 灾民特地登门向搜救队致谢。" 
    },
    { 
        word: "表达意见=进言", 
        pinyin: "biǎo dá yì jiàn = jìn yán", 
        defZh: "向上级或长者陈述观点看法与建议。", 
        defEn: "Offer advice to superiors", 
        defBm: "Memberi pandangan / Nasihat", 
        example: "贤相多次在朝堂上冒死表达意见。 → 贤相多次在朝堂上进言。" 
    },
    { 
        word: "资金援助=资助", 
        pinyin: "zī jīn yuán zhù = zī zhù", 
        defZh: "在财力或经费上给予扶助支持。", 
        defEn: "Financial aid / Sponsor", 
        defBm: "Bantuan kewangan / Menaja", 
        example: "慈善基金会为清寒学子提供资金援助。 → 慈善基金会资助清寒学子。" 
    },
    { 
        word: "报纸刊物=报刊", 
        pinyin: "bào zhǐ kān wù = bào kān", 
        defZh: "各种报纸和定期出版物的合称。", 
        defEn: "Newspapers and periodicals", 
        defBm: "Akhbar dan majalah", 
        example: "阅览室桌上整齐放置着各大华文报纸刊物。 → 阅览室放有各大华文报刊。" 
    },
    { 
        word: "参加考试=应考", 
        pinyin: "cān jiā kǎo shì = yìng kǎo", 
        defZh: "报名并进入考场接受知识水平测验。", 
        defEn: "Take an examination", 
        defBm: "Menduduki peperiksaan", 
        example: "中五毕业生从容步入考场参加考试。 → 中五毕业生从容步入考场应考。" 
    },
    { 
        word: "产生矛盾=生隙", 
        pinyin: "chǎn shēng máo dùn = shēng xì", 
        defZh: "人与人之间产生隔阂、猜忌或不和。", 
        defEn: "Create rift / Cause misunderstanding", 
        defBm: "Timbul perselisihan", 
        example: "两人由于欠缺沟通而在私下产生矛盾。 → 两人由于少沟通而生隙。" 
    },
    { 
        word: "传播媒介=传媒", 
        pinyin: "chuán bō méi jiè = chuán méi", 
        defZh: "用以传递信息的大众载体（广播、报刊、网络等）。", 
        defEn: "Mass media", 
        defBm: "Media massa", 
        example: "新时代数字传播媒介广泛融入百姓日常生活。 → 数字传媒融入百姓生活。" 
    },
    { 
        word: "传授知识=授业", 
        pinyin: "chuán shòu zhī shi = shòu yè", 
        defZh: "教师向学生传授学业技能与学识。", 
        defEn: "Impart knowledge", 
        defBm: "Menurunkan ilmu", 
        example: "老师在三尺讲台上默默耕耘、传授知识。 → 老师在讲台上授业。" 
    },
    { 
        word: "超过载重=超载", 
        pinyin: "chāo guò zài zhòng = chāo zài", 
        defZh: "运输工具装载的重量超出法定限定标准。", 
        defEn: "Overloaded", 
        defBm: "Lebih muatan", 
        example: "重型罗里严重超过载重极易压损公路桥梁。 → 罗里严重超载易损路桥。" 
    },
    { 
        word: "筹集资金=集资", 
        pinyin: "chóu jí zī jīn = jí zī", 
        defZh: "通过多种渠道把分散的钱款汇集在一起。", 
        defEn: "Raise funds / Pool capital", 
        defBm: "Mengumpul modal / Mengutip dana", 
        example: "先辈群策群力、筹集资金创办了华文独立中学。 → 先辈集资创办独中。" 
    },
    { 
        word: "调查证实=查证", 
        pinyin: "diào chá zhèng shí = chá zhèng", 
        defZh: "深入核查情况以证实真伪。", 
        defEn: "Investigate and verify", 
        defBm: "Menyiasat dan mengesahkan", 
        example: "执法人员对举报信提及的线索展开调查证实。 → 执法人员对线索进行查证。" 
    },
    { 
        word: "承认错误=认错", 
        pinyin: "chéng rèn cuò wù = rèn cuò", 
        defZh: "认识到自身的过失并口头认可承认。", 
        defEn: "Admit a mistake", 
        defBm: "Mengaku kesalahan", 
        example: "他在长辈面前主动低头承认错误。 → 他在长辈面前主动认错。" 
    },
    { 
        word: "调查研究=调研", 
        pinyin: "diào chá yán jiū = diào yán", 
        defZh: "深入现场调查具体情况并加以综合分析研究。", 
        defEn: "Investigation and research", 
        defBm: "Kajian dan penyelidikan", 
        example: "督学下乡就学生辍学诱因展开充分调查研究。 → 督学下乡开展调研。" 
    },
    { 
        word: "调查探访=走访", 
        pinyin: "diào chá tàn fǎng = zǒu fǎng", 
        defZh: "前往居民家中实地观察慰问与调查核实。", 
        defEn: "Visit on-site", 
        defBm: "Melawat dan meninjau", 
        example: "村长挨家挨户调查探访孤寡老人的起居条件。 → 村长挨家挨户走访孤老。" 
    },
    { 
        word: "等待就业=待业", 
        pinyin: "děng dài jiù yè = dài yè", 
        defZh: "适龄劳动力正处在寻找工作的空档阶段。", 
        defEn: "Awaiting employment", 
        defBm: "Menunggu peluang pekerjaan", 
        example: "青年培训课专为刚毕业等待就业的青年开办。 → 培训专为待业青年开办。" 
    },
    { 
        word: "电力供应=电供", 
        pinyin: "diàn lì gōng yìng = diàn gōng", 
        defZh: "公共电网输送给用户的电能系统服务。", 
        defEn: "Power supply", 
        defBm: "Bekalan elektrik", 
        example: "变压器遭雷击导致整个市镇电力供应瞬间中断。 → 雷击致使全镇电供中断。" 
    },
    { 
        word: "电子商务=电商", 
        pinyin: "diàn zǐ shāng wù = diàn shāng", 
        defZh: "依托互联网络为基础载体展开的交易与买卖。", 
        defEn: "E-commerce", 
        defBm: "E-dagang", 
        example: "传统实体杂货店纷纷转型接入电子商务渠道。 → 实体店纷纷接入电商。" 
    },
    { 
        word: "五项教育=五育", 
        pinyin: "wǔ xiàng jiào yù = wǔ yù", 
        defZh: "德育、智育、体育、群育、美育的合称。", 
        defEn: "Five aspects of education", 
        defBm: "Pendidikan lima aspek seimbang", 
        example: "中学教程格外注重全面推进五项教育平衡发展。 → 教程注重五育并重。" 
    },
    { 
        word: "赢取第一=夺标", 
        pinyin: "yíng qǔ dì yī = duó biāo", 
        defZh: "在体育竞技或学术赛事中勇夺冠军标杆。", 
        defEn: "Win the championship", 
        defBm: "Menjuarai pertandingan", 
        example: "本校健儿在全县学联田径锦标赛中赢取第一。 → 本校健儿在学联赛夺标。" 
    },
    { 
        word: "监督检查=督查", 
        pinyin: "jiān dū jiǎn chá = dū chá", 
        defZh: "进行监督并催促相关部门落实规章制度。", 
        defEn: "Supervise and inspect", 
        defBm: "Memantau dan memeriksa", 
        example: "教育厅派专项工作组对食堂卫生实施监督检查。 → 教育厅派专员督查食堂。" 
    },
    { 
        word: "反对贪污=反贪", 
        pinyin: "fǎn duì tān wū = fǎn tān", 
        defZh: "抵制、取缔利用职务便利非法收受财物行为。", 
        defEn: "Anti-corruption", 
        defBm: "Pencegahan rasuah", 
        example: "国家法令向公务机构宣示坚决反对贪污的决心。 → 国家宣示坚决反贪决心。" 
    },
    { 
        word: "防止盗窃=防盗", 
        pinyin: "fáng zhǐ dào qiè = fáng dào", 
        defZh: "通过防范措施阻止非法偷盗行为发生。", 
        defEn: "Theft prevention", 
        defBm: "Cegah kecurian", 
        example: "住户在门窗前加装铁栅栏以达到防止盗窃目的。 → 住户加装铁栅以利防盗。" 
    },
    { 
        word: "放弃权利=弃权", 
        pinyin: "fàng qì quán lì = qì quán", 
        defZh: "自愿放弃享有的投票、表决或索赔权利。", 
        defEn: "Forfeit rights / Abstain", 
        defBm: "Berkecuali / Melepaskan hak", 
        example: "在法案表决环节，多名跨党派议员选择放弃权利。 → 多名议员选择弃权。" 
    },
    { 
        word: "中途退学=辍学", 
        pinyin: "zhōng tú tuì xué = chuò xué", 
        defZh: "尚未完成义务学业便提早离开校园。", 
        defEn: "Drop out of school", 
        defBm: "Berhenti sekolah / Cicir", 
        example: "为减轻家庭重担，长子被迫中途退学外出做工。 → 长子被迫辍学打工。" 
    },
    { 
        word: "研究判断=研判", 
        pinyin: "yán jiū pàn duàn = yán pàn", 
        defZh: "深入研究已有证据与线索并作出推论判定。", 
        defEn: "Study and assess", 
        defBm: "Menganalisis dan menilai", 
        example: "防灾指挥部根据上游云雨走向连夜进行研究判断。 → 指挥部连夜研判汛情。" 
    },
    { 
        word: "治理污染=治污", 
        pinyin: "zhì lǐ wū rǎn = zhì wū", 
        defZh: "治理已被工业废弃物或废水破坏的环境。", 
        defEn: "Pollution control", 
        defBm: "Mengawal pencemaran", 
        example: "沿岸企业被勒令暂停运作并限期做好治理污染。 → 沿岸企业限期治污。" 
    },
    { 
        word: "预防疫病=防疫", 
        pinyin: "yù fáng yì bìng = fáng yì", 
        defZh: "预防控制并阻断传染性病毒或流行病传播。", 
        defEn: "Epidemic prevention", 
        defBm: "Pencegahan wabak", 
        example: "全民常戴口罩与勤消毒是阻断病毒的预防疫病法。 → 戴口罩是日常防疫法。" 
    },
    { 
        word: "公共关系=公关", 
        pinyin: "gōng gòng guān xi = gōng guān", 
        defZh: "维护、处理好机构组织与广大社会公众的联络协调。", 
        defEn: "Public relations (PR)", 
        defBm: "Hubungan awam", 
        example: "面对负面假新闻，集团发言人必须具备高超的公共关系技巧。 → 发言人须精通公关。" 
    },
    { 
        word: "协同合作=协作", 
        pinyin: "xié tóng hé zuò = xié zuò", 
        defZh: "多个团队或人员彼此紧密配合开展工作。", 
        defEn: "Cooperate / Collaborate", 
        defBm: "Bekerjasama", 
        example: "各小组只有破除彼此壁垒、协同合作方能按时交付。 → 各组须紧密协作。" 
    },
    { 
        word: "国家银行=国行", 
        pinyin: "guó jiā yín háng = guó háng", 
        defZh: "主管一国货币发行与宏观金融信贷政策的中央银行。", 
        defEn: "Central Bank (Bank Negara)", 
        defBm: "Bank Negara", 
        example: "国家银行今晨发文告宣布调升基准隔夜拆借息率。 → 国行宣布加息。" 
    },
    { 
        word: "国民中学=国中", 
        pinyin: "guó mín zhōng xué = guó zhōng", 
        defZh: "马来西亚以国家官方教育大纲施教的主流公立中学。", 
        defEn: "National secondary school (SMK)", 
        defBm: "Sekolah Menengah Kebangsaan (SMK)", 
        example: "他在本地一所师资完备的国民中学读完高初中。 → 他在本地国中毕业。" 
    },
    { 
        word: "华文小学=华小", 
        pinyin: "huá wén xiǎo xué = huá xiǎo", 
        defZh: "以华语为核心主要教学媒介语的国民型小学。", 
        defEn: "Chinese primary school (SJKC)", 
        defBm: "Sekolah Rendah Jenis Kebangsaan Cina", 
        example: "全马各地的华文小学肩负着扎根母语的基础重任。 → 华小肩负扎根母语重任。" 
    },
    { 
        word: "独立中学=独中", 
        pinyin: "dú lì zhōng xué = dú zhōng", 
        defZh: "由华社民间自资筹办、自成统考考试体系的民办中学。", 
        defEn: "Chinese Independent High School", 
        defBm: "Sekolah Menengah Persendirian Cina", 
        example: "全国六十一所独立中学为社会培育了无数双语英才。 → 全马独中培育英才。" 
    },
    { 
        word: "供给需求=供求", 
        pinyin: "gōng jǐ xū qiú = gōng qiú", 
        defZh: "市场上所供给的货物量与消费者实际需要量的比值规律。", 
        defEn: "Supply and demand", 
        defBm: "Bekalan dan permintaan", 
        example: "蔬菜海鲜价格由自由贸易市场上的供给需求决定。 → 菜价受供求影响。" 
    },
    { 
        word: "华人社会=华社", 
        pinyin: "huá rén shè huì = huá shè", 
        defZh: "马来西亚全体华人社团、群众与社群实体的统称。", 
        defEn: "Chinese community", 
        defBm: "Masyarakat Cina", 
        example: "全马各地的华人社会热烈捐款以维护母语学堂。 → 华社捐款护校。" 
    },
    { 
        word: "化学肥料=化肥", 
        pinyin: "huà xué féi liào = huà féi", 
        defZh: "人工提炼或合成制造的农用化学肥分。", 
        defEn: "Chemical fertilizer", 
        defBm: "Baja kimia", 
        example: "过度长期施放无机化学肥料会导致土壤硬化板结。 → 滥用化肥会坏地。" 
    },
    { 
        word: "环境保护=环保", 
        pinyin: "huán jìng bǎo hù = huán bǎo", 
        defZh: "人类为保护生态自然而采取的综合防卫举措。", 
        defEn: "Environmental protection", 
        defBm: "Pemeliharaan alam sekitar", 
        example: "自备环保袋买菜购物是关爱地球的环境保护习惯。 → 自备布袋属环保行为。" 
    },
    { 
        word: "互相帮助=互助", 
        pinyin: "hù xiāng bāng zhù = hù zhù", 
        defZh: "彼此关照扶持、合力抵御外部危难困厄。", 
        defEn: "Mutual assistance", 
        defBm: "Tolong-menolong", 
        example: "面对滔天洪水，邻舍街坊之间展现出互相帮助的精神。 → 街坊展现互助精神。" 
    },
    { 
        word: "互相借鉴=互鉴", 
        pinyin: "hù xiāng jiè jiàn = hù jiàn", 
        defZh: "彼此吸收对方的有益经验作为参考参照。", 
        defEn: "Mutual learning", 
        defBm: "Saling mencontohi", 
        example: "不同文明之间应当多开展对话交流并做到互相借鉴。 → 多元文明宜交流互鉴。" 
    },
    { 
        word: "恢复健康=康复", 
        pinyin: "huī fù jiàn kāng = kāng fù", 
        defZh: "患病或受伤后身体逐渐复原回强健常态。", 
        defEn: "Recover / Rehabilitate", 
        defBm: "Pulih sihat / Sembuh", 
        example: "在医护悉心护理下，老先生终于慢慢恢复健康。 → 老先生终康复出院。" 
    },
    { 
        word: "缓和矛盾=调和", 
        pinyin: "huǎn hé máo dùn = tiáo hé", 
        defZh: "排除并化解双方之间紧张尖锐的敌对僵局。", 
        defEn: "Mediate / Reconcile", 
        defBm: "Mendamaikan perselisihan", 
        example: "村长积极出面斡旋，努力在两大家族间缓和矛盾。 → 村长出面调和纠纷。" 
    },
    { 
        word: "怀疑猜测=猜疑", 
        pinyin: "huái yí cāi cè = cāi yí", 
        defZh: "心中无凭无据地怀疑、推度揣摩他人动向。", 
        defEn: "Suspicion / Mistrust", 
        defBm: "Syak wasangka / Curiga", 
        example: "同侪之间若缺乏坦诚，就极易引发无谓的怀疑猜测。 → 缺坦诚易生猜疑。" 
    },
    { 
        word: "合理统筹=统筹", 
        pinyin: "hé lǐ tǒng chóu = tǒng chóu", 
        defZh: "通盘规划考虑，全面统筹安排各项事物。", 
        defEn: "Overall planning", 
        defBm: "Merancang secara menyeluruh", 
        example: "备考期间学子当学会合理统筹作息与学习。 → 备考须善于统筹时间。" 
    },
    { 
        word: "家庭暴力=家暴", 
        pinyin: "jiā tíng bào lì = jiā bào", 
        defZh: "在家庭成员之间发生的肉体或精神施暴伤害。", 
        defEn: "Domestic violence", 
        defBm: "Keganasan rumah tangga", 
        example: "面对令人发指的家庭暴力受害人绝不可选择隐忍。 → 对家暴不可保持沉默。" 
    },
    { 
        word: "家庭访问=家访", 
        pinyin: "jiā tíng fǎng wèn = jiā fǎng", 
        defZh: "班主任或任课老师上门走访学生家庭了解实况。", 
        defEn: "Home visit", 
        defBm: "Lawatan ke rumah", 
        example: "班主任抽空在周末逐一开展学生家庭访问。 → 班主任周末开展家访。" 
    },
    { 
        word: "节约能源=节能", 
        pinyin: "jié yuē néng yuán = jié néng", 
        defZh: "尽可能节省减少水、电、燃气等资源消耗。", 
        defEn: "Energy saving", 
        defBm: "Penjimatan tenaga", 
        example: "随手关闭闲置电灯空调是人人都应养成的节约能源习惯。 → 随手关灯可节能。" 
    },
    { 
        word: "解决困难=纾困", 
        pinyin: "jiě jué kùn nan = shū kùn", 
        defZh: "化解、解除陷入的窘境困苦与危局。", 
        defEn: "Relieve difficulties / Bailout", 
        defBm: "Melegakan kesusahan", 
        example: "中央银行下拨专项优惠低息借贷以及时解决困难。 → 央行拨专款以纾困。" 
    },
    { 
        word: "进校求学=就学", 
        pinyin: "jìn xiào qiú xué = jiù xué", 
        defZh: "适龄青少年进入正规学校接受课堂教育。", 
        defEn: "Attend school", 
        defBm: "Bersekolah", 
        example: "政府拨款确保贫困内陆地区儿童皆能平等进校求学。 → 确保儿童能就学。" 
    },
    { 
        word: "禁止吸烟=禁烟", 
        pinyin: "jìn zhǐ xī yān = jìn yān", 
        defZh: "在法律规定的公共室内及指定场所禁止抽烟草。", 
        defEn: "Smoking ban", 
        defBm: "Larangan merokok", 
        example: "一切冷气餐馆及校园范围内全面实行禁止吸烟法令。 → 食肆一律全面禁烟。" 
    },
    { 
        word: "减少开支=节流", 
        pinyin: "jiǎn shǎo kāi zhī = jié liú", 
        defZh: "削减紧缩不必要的支出以保全有限财力资金。", 
        defEn: "Cut down expenses", 
        defBm: "Mengurangkan perbelanjaan", 
        example: "景气萧条之下，公司首先要做的是开源并且减少开支。 → 公司须开源节流。" 
    },
    { 
        word: "检查核实=查验", 
        pinyin: "jiǎn chá hé shí = chá yàn", 
        defZh: "经过严格审阅对比以查明事实是否属实。", 
        defEn: "Examine and verify", 
        defBm: "Memeriksa dan mengesahkan", 
        example: "关税局官员仔细检查核实集装箱内报关物品。 → 官员仔细查验货物。" 
    },
    { 
        word: "监督管理=监管", 
        pinyin: "jiān dū guǎn lǐ = jiān guǎn", 
        defZh: "依从法定权限对相关人员、企业展开审查管理。", 
        defEn: "Supervise and regulate", 
        defBm: "Penyeliaan dan kawal selia", 
        example: "证券委员会强化对未获执照网贷平台的监督管理。 → 证监会强化监管。" 
    },
    { 
        word: "科学普及=科普", 
        pinyin: "kē xué pǔ jí = kē pǔ", 
        defZh: "面向普通社会公众传授普及现代基础科学常识。", 
        defEn: "Popular science", 
        defBm: "Mempopularkan sains", 
        example: "在华小推行天文学趣味实践是十分有益的科学普及项目。 → 观星是极佳科普。" 
    },
    { 
        word: "科学研究=科研", 
        pinyin: "kē xué yán jiū = kē yán", 
        defZh: "为了揭示客观规律、发现新知识而进行的学术研究。", 
        defEn: "Scientific research", 
        defBm: "Penyelidikan saintifik", 
        example: "大学教授率领硕博士研究生扎根实验室搞科学研究。 → 教授投身科研。" 
    },
    { 
        word: "科学技术=科技", 
        pinyin: "kē xué jì shù = kē jì", 
        defZh: "自然科学原理与生产实际技术手段的合称。", 
        defEn: "Science and technology", 
        defBm: "Sains dan teknologi", 
        example: "现代人工智能科学技术正在以超常速度改写社会。 → 人工智能科技迅猛。" 
    },
    { 
        word: "克服困难=克难", 
        pinyin: "kè fú kùn nan = kè nán", 
        defZh: "凭借坚强韧劲去战胜各种险阻与阻碍。", 
        defEn: "Overcome difficulties", 
        defBm: "Mengatasi kesukaran", 
        example: "工程队伍在深山密林中顽强拼搏、克服困难修通了栈道。 → 施工队克难筑路。" 
    },
    { 
        word: "考查核实=考核", 
        pinyin: "kǎo chá hé shí = kǎo hé", 
        defZh: "研究审阅职员日常工作业绩以做定级定薪判定。", 
        defEn: "Assess / Evaluate", 
        defBm: "Menilai / Menguji prestasi", 
        example: "行政部门年底依规对每位职员进行全面考查核实。 → 部门年终开展考核。" 
    },
    { 
        word: "开拓革新=创新", 
        pinyin: "kāi tuò gé xīn = chuàng xīn", 
        defZh: "打破陈旧守旧体制束缚，破旧立新。", 
        defEn: "Innovate", 
        defBm: "Berinovasi", 
        example: "制造业若墨守成规不求开拓革新，早晚会被市场甩脱。 → 制造企业亟需创新。" 
    },
    { 
        word: "平抑物价=平抑", 
        pinyin: "píng yì wù jià = píng yì", 
        defZh: "运用宏观经济或限价手段遏制市场菜价物价疯涨。", 
        defEn: "Stabilize market prices", 
        defBm: "Menstabilkan harga", 
        example: "政府释放战略储备物资以达到平抑物价的目标。 → 官方平抑肉菜物价。" 
    },
    { 
        word: "对外贸易=外贸", 
        pinyin: "duì wài mào yì = wài mào", 
        defZh: "本国与国际其他国家主体之间开展的货物进出口贸易。", 
        defEn: "Foreign trade", 
        defBm: "Perdagangan luar", 
        example: "大马处于要冲节点，自古以来就格外繁荣对外贸易。 → 大马大力发展外贸。" 
    },
    { 
        word: "艰苦辛酸=艰辛", 
        pinyin: "jiān kǔ xīn suān = jiān xīn", 
        defZh: "历经岁月里的种种磨难挫折、身心劳顿辛苦。", 
        defEn: "Hardships / Arduous", 
        defBm: "Kepayahan / Kesukaran", 
        example: "南来先驱开荒辟土修路筑城，尝尽了其中的艰苦辛酸。 → 先驱拓荒历尽艰辛。" 
    },
    { 
        word: "宽容原谅=宽恕", 
        pinyin: "kuān róng yuán liàng = kuān shù", 
        defZh: "以仁厚包容的胸襟宽待免除他人过错。", 
        defEn: "Forgive / Pardon", 
        defBm: "Memaafkan", 
        example: "见凶嫌悔过认罪态度极其诚恳，受害者家属选择宽容原谅。 → 家属终选择宽恕。" 
    },
    { 
        word: "客观公正=公允", 
        pinyin: "kè guān gōng zhèng = gōng zhèng", 
        defZh: "不偏私护短，秉持公道无私原则进行判别。", 
        defEn: "Fair / Impartial", 
        defBm: "Adil dan saksama", 
        example: "辩论评判团必须秉持客观公正原则作出最终打分裁决。 → 评委当求裁判公允。" 
    },
    { 
        word: "滥用权力=滥权", 
        pinyin: "làn yòng quán lì = làn quán", 
        defZh: "超出法定职务限定范围私用权柄牟利。", 
        defEn: "Abuse of power", 
        defBm: "Penyalahgunaan kuasa", 
        example: "执法官员若知法犯法、滥用权力，必将受国法严肃惩处。 → 严打任何滥权行为。" 
    },
    { 
        word: "历史地理=史地", 
        pinyin: "lì shǐ dì lǐ = shǐ dì", 
        defZh: "历史学与地理学两门人文文科科目的合称。", 
        defEn: "History and Geography", 
        defBm: "Sejarah dan Geografi", 
        example: "中学文商科大纲扎实整合了马来西亚与东南亚历史地理。 → 文科生必修史地。" 
    },
    { 
        word: "联合投资=合资", 
        pinyin: "lián hé tóu zī = hé zī", 
        defZh: "两家或多家独立商业主体共同出资组建新公司。", 
        defEn: "Joint venture", 
        defBm: "Usahasama modal", 
        example: "外国跨国财团与本地公司联合投资建设了新炼油厂。 → 两企合资建炼油厂。" 
    },
    { 
        word: "联合举办=联办", 
        pinyin: "lián hé jǔ bàn = lián bàn", 
        defZh: "多个社团或机构组织共同筹办承办某项活动。", 
        defEn: "Jointly organize", 
        defBm: "Menganjurkan bersama", 
        example: "全国华文书法大会由八大华青与中华大会堂联合举办。 → 华团联办书法大会。" 
    },
    { 
        word: "流行感冒=流感", 
        pinyin: "liú xíng gǎn mào = liú gǎn", 
        defZh: "由特定流感病毒引起的急性呼吸系统传染病。", 
        defEn: "Influenza / Flu", 
        defBm: "Selsema burung / Influenza", 
        example: "季节交替温差骤升骤降极易造成流行感冒四处散播。 → 转季时须防流感。" 
    },
    { 
        word: "履行职责=履职", 
        pinyin: "lǚ xíng zhí zé = lǚ zhí", 
        defZh: "依照岗位规章要求认真做好本职本分工作。", 
        defEn: "Perform duties", 
        defBm: "Menjalankan tugas", 
        example: "身为国家公仆，理应恪尽职守、勤恳履行职责造福黎民。 → 公仆当勤奋履职。" 
    },
    { 
        word: "接洽商谈=洽商", 
        pinyin: "jiē qià shāng tán = qià shāng", 
        defZh: "与外方联系接触并坐下来就合作细节展开商议。", 
        defEn: "Negotiate / Consult", 
        defBm: "Berunding / Berbincang", 
        example: "两国经贸谈判代表团就自由关税减让框架正展开接洽商谈。 → 代表团正展开洽商。" 
    },
    { 
        word: "知晓实情=知情", 
        pinyin: "zhī xiǎo shí qíng = zhī qíng", 
        defZh: "清楚了解事情内部发生的前因后果真相。", 
        defEn: "In the know / Aware", 
        defBm: "Mengetahui keadaan", 
        example: "凶案发生当夜，只有仓库内当值保安知晓实情。 → 仅当值保安知情。" 
    },
    { 
        word: "清廉自守=廉洁", 
        pinyin: "qīng lián zì shǒu = lián jié", 
        defZh: "品行方正不贪取不义财物、严守道德底线。", 
        defEn: "Honest and upright / Incorruptible", 
        defBm: "Jujur / Bersih dari rasuah", 
        example: "当权者唯有两袖清风、清廉自守，方能赢得万众敬仰。 → 当官者当求廉洁。" 
    },
    { 
        word: "豁然大悟=顿悟", 
        pinyin: "huò rán dà wù = dùn wù", 
        defZh: "经过指点或反思突然一下子明白透彻了哲理。", 
        defEn: "Sudden realization", 
        defBm: "Kesedaran mendalam", 
        example: "听完导师针对治学的一席点拨，他内心豁然大悟。 → 经点拨后他顿悟了。" 
    },
    { 
        word: "记录过失=记过", 
        pinyin: "jì lù guò shī = jì guò", 
        defZh: "学校或机关依纪对违犯底线者处以记过处分。", 
        defEn: "Record a demerit", 
        defBm: "Mencatat kesalahan tatatertib", 
        example: "训导处对多次无故聚众打斗的学生执行记录过失处分。 → 违纪学生被记过。" 
    },
    { 
        word: "低碳环保=低碳", 
        pinyin: "dī tàn huán bǎo = dī tàn", 
        defZh: "减少温室气体二氧化碳的消耗与排放的生活实践。", 
        defEn: "Low carbon", 
        defBm: "Rendah karbon", 
        example: "搭乘轻快铁巴士出行是践行低碳环保理念的城市新风尚。 → 乘轻快铁属低碳出行。" 
    },
    { 
        word: "面对面谈=面谈", 
        pinyin: "miàn duì miàn tán = miàn tán", 
        defZh: "双方当面坐在一起进行直接对话讨论。", 
        defEn: "Face-to-face talk / Interview", 
        defBm: "Temu duga bersemuka", 
        example: "校方针对学生个案邀请家长到教务室展开面对面谈。 → 校长与家长面谈。" 
    },
    { 
        word: "表明态度=表态", 
        pinyin: "biǎo míng tài dù = biǎo tài", 
        defZh: "公开发表明确的主张、意见或阵营立场。", 
        defEn: "Make one's stance clear", 
        defBm: "Menyatakan pendirian", 
        example: "面对涉及本邦文教的大是大非命题，华团领袖必须表明态度。 → 华团领袖须表态。" 
    },
    { 
        word: "盲目跟从=盲从", 
        pinyin: "máng mù gēn cóng = máng cóng", 
        defZh: "自己不作理性思考而一味附和、跟着众人跑。", 
        defEn: "Blindly follow", 
        defBm: "Mengikut secara membuta tuli", 
        example: "年轻学子必须培养独立审辨思维，切莫不辨是非盲目跟从。 → 切忌盲从他人。" 
    },
    { 
        word: "达到指标=达标", 
        pinyin: "dá dào zhǐ biāo = dá biāo", 
        defZh: "经过考核检测达到预先制定的各项指标标准。", 
        defEn: "Reach the required standard", 
        defBm: "Mencapai piawaian", 
        example: "新过滤水厂出水的水质完全达到指标并向千家万户供水。 → 水质检测已达标。" 
    },
    { 
        word: "秘密谋划=密谋", 
        pinyin: "mì mì móu huà = mì móu", 
        defZh: "躲在暗地里不公开地策划某种非法勾当或阴谋。", 
        defEn: "Plot secretly / Conspire", 
        defBm: "Merancang secara rahsia", 
        example: "乱党趁深夜齐聚后巷废屋秘密谋划篡位叛变。 → 乱党密谋叛变。" 
    },
    { 
        word: "追思悼念=缅怀", 
        pinyin: "zhuī sī dào niàn = miǎn huái", 
        defZh: "深情重温、思念逝去的先烈、前贤或往事功业。", 
        defEn: "Commemorate / Cherish memory", 
        defBm: "Mengenang kembali jasa", 
        example: "大众齐聚墓园肃立，追思悼念为族群利益牺牲的先驱。 → 人们缅怀先烈。" 
    },
    { 
        word: "洞悉看透=洞悉", 
        pinyin: "dòng xī kàn tòu = dòng xī", 
        defZh: "眼光犀利深邃，把隐藏很深的伪装与内情全看明白。", 
        defEn: "See through / Deep insight", 
        defBm: "Melihat dan memahami", 
        example: "老探长目光如炬，早已洞悉看透了狡猾嫌犯的伪装借口。 → 探长早已洞悉伪装。" 
    },
    { 
        word: "民众生活=民生", 
        pinyin: "mín zhòng shēng huó = mín shēng", 
        defZh: "普通百姓家庭的饮食起居、衣食住行基本生活保障。", 
        defEn: "People's livelihood", 
        defBm: "Kebajikan hidup rakyat", 
        example: "地方施政的第一大底线，正是切实看顾好柴米油盐民众生活。 → 施政重在保障民生。" 
    },
    { 
        word: "民众意愿=民意", 
        pinyin: "mín zhòng yì yuàn = mín yì", 
        defZh: "社会大众多数人心中持有的普遍期待、愿望与舆论。", 
        defEn: "Public opinion / Popular will", 
        defBm: "Suara hati rakyat", 
        example: "修改法案之前务须广开言路，顺应全社会广泛的民众意愿。 → 修法须顺应民意。" 
    },
    { 
        word: "人身保险=寿险", 
        pinyin: "rén shēn bǎo xiǎn = shòu xiǎn", 
        defZh: "以被保险人的身体生命为标的人寿保险产品。", 
        defEn: "Life insurance", 
        defBm: "Insurans hayat", 
        example: "中年人及早备妥足额人身保险以对冲未知重病风险。 → 宜早备足额寿险。" 
    },
    { 
        word: "思想认知=认知", 
        pinyin: "sī xiǎng rèn zhī = rèn zhī", 
        defZh: "人脑对世界客观事物的理解、掌握与评价水平。", 
        defEn: "Cognition / Awareness", 
        defBm: "Kognisi / Kesedaran", 
        example: "跨文化游学能彻底拓宽青少年的眼界并打破旧有思想认知。 → 游学刷新思想认知。" 
    },
    { 
        word: "遵从指挥=服从", 
        pinyin: "zūn cóng zhǐ huī = fú cóng", 
        defZh: "服帖顺服、无条件听从命令行事。", 
        defEn: "Obey / Subordinate to", 
        defBm: "Patuh kepada arahan", 
        example: "消防救援队伍在火场突击时必须绝对遵从指挥。 → 救援人员须绝对服从。" 
    },
    { 
        word: "人力资源=人资", 
        pinyin: "rén lì zī yuán = rén zī", 
        defZh: "一个组织所拥有的劳动力以及专业人才队伍的统称。", 
        defEn: "Human resources (HR)", 
        defBm: "Sumber manusia", 
        example: "高科技集团成立专属部门以强化企业内部的人力资源储备。 → 集团强化人资储备。" 
    },
    { 
        word: "融入社会=融入", 
        pinyin: "róng rù shè huì = róng rù", 
        defZh: "新成员逐渐接纳周围环境与规则、成为群体一部分。", 
        defEn: "Integrate into society", 
        defBm: "Berintegrasi", 
        example: "海外归侨主动学好母语和国语以全面融入社会生活。 → 归侨主动融入社会。" 
    },
    { 
        word: "克制隐忍=隐忍", 
        pinyin: "kè zhì yǐn rěn = yǐn rěn", 
        defZh: "强行按捺住自己内心的怒火与不平，暂作忍让。", 
        defEn: "Endure in silence", 
        defBm: "Menahan sabar tersembunyi", 
        example: "为了不打破和谈维稳大局，他不得不强作克制隐忍。 → 为顾大局他选择隐忍。" 
    },
    { 
        word: "生物化学=生化", 
        pinyin: "shēng wù huà xué = shēng huà", 
        defZh: "结合生物机理与化学反应交叉前沿领域的学科与技术。", 
        defEn: "Biochemical", 
        defBm: "Biokimia", 
        example: "该试验厂房正在测试研发针对农业害虫的生物化学制剂。 → 厂房研发新型生化制剂。" 
    },
    { 
        word: "少年儿童=少儿", 
        pinyin: "shào nián ér tóng = shào ér", 
        defZh: "学龄儿童至初中学龄阶段青少年的合称缩写。", 
        defEn: "Children and youth", 
        defBm: "Kanak-kanak dan remaja", 
        example: "新修的社区中心专门划出两百平米打造少年儿童乐园。 → 社区建有少儿乐园。" 
    }
];

// 将数据暴露为全局变量
var allIdioms = vocabularyData;
