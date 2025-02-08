---
title: ✨ 시작하기
description: Agnes는 Tachyon의 프론트엔드입니다.
---

**PSDS**는 부산동성고등학교 학생회에서 개발한, 학생들을 위한 다양한 서비스를 제공하는 플랫폼입니다.\
**PSDS**의 프론트엔드는 Agnes와 Tachyon으로 구성되어 있습니다.

---

#### Agnes는 어떻게 만들어졌나요?

더 자연스럽고 빠른 사용자 경험을 제공하기 위해 Agnes는 [Sveltekit]으로 개발되었습니다. \
[Tachyon]이 Python으로 개발되었으니, Python의 프레임워크를 쓰는 것이 편했겠지만 \
실제로 데모를 개발하였을 때, UI/UX 측면에서 Sveltekit이 더 적합하다고 판단하였습니다.

#### Agnes는 무엇으로 만들어졌나요?

TypeScript, Sveltekit과 Tailwind CSS를 사용하여 개발되었습니다. \
설치 할 수 있게 `Vite PWA`, 아이콘은 `Lucide Icons` UI 구성은 `shadcn/ui`를 사용하였습니다.

#### Agnes는 어떻게 Tachyon과 함께 동작하나요?

Agnes는 [Tachyon]의 API를 사용하여 데이터를 가져오고, [Tachyon]의 서비스를 이용합니다. \
[Tachyon]은 내부적으로 PSDS API를 사용하여, 학교 홈페이지에서 추출한 데이터를 캐싱하여 제공합니다. \
Agnes가 Sveltekit의 SSG 옵션을 통해, 정적으로 빌드되어 [Tachyon]에 탑재되어 배포됩니다.

[Tachyon]: /tachyon/1_start
[Sveltekit]: https://svelte.dev/docs/kit/introduction
