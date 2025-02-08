---
title: ⚡ 준비하기
description: Node.js와 npm을 설치하고, 프로젝트를 생성합니다.
---

기본적으로 `Git`과 `Node.js`가 설치되어 있어야 하며, \
두 도구에 대한 이해가 있다고 가정하여 설명하겠습니다.

Linux 환경을 권장하며, Windows에서 진행 시, **PowerShell**을 사용하는 것을 추천합니다.

---

### 1. Git을 통해 프로젝트 클론하기

```bash
git clone https://github.com/PSDSPLUS/Agnes ./agnes
cd ./agnes
```

위 명령어를 통해 Agnes 프로젝트를 클론하고, 해당 디렉토리로 이동합니다.

### 2. Corepack을 통해 pnpm 설치하기

```bash
corepack enable pnpm
```

`corepack`을 통해 `pnpm`을 설치합니다.
Agnes는 pnpm을 사용하여 의존성을 관리합니다.

### 3. 프로젝트 설치하기

```bash
pnpm install
```

이를 통해 Agnes에 필요한 의존성을 설치합니다. \
`pnpm`은 `npm`과 비슷하지만, 더 빠르고 효율적입니다.

---

### 추가로 알아두면 좋은 것들

#### 필요한 도구들

- [PowerShell](https://docs.microsoft.com/ko-kr/powershell/scripting/overview?view=powershell-7.1)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/ko/)
- [corepack](https://corepack.github.io/)
- [npm](https://www.npmjs.com/)
- [pnpm](https://pnpm.io/)

#### Node.js를 설치했는데, 의존성이 설치되지 않아요.

Agnes는 Node.js LTS 버전을 사용하며, Node.js 버전이 낮거나, \
`pnpm`이 설치되지 않았을 경우, 위의 가이드를 다시 확인해보세요.
