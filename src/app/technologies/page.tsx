import TechnologyCard from "@/components/TechnologyCard";

export default function Home() {
  return (
    <div className="w-full gap-4 flex flex-col px-4">
      <div className="flex flex-col bg-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Technologies I Work With</h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center md:text-left">Main Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <TechnologyCard imgSrc="/images/svg/logo-react.svg" altText="React" label="React" />
              <TechnologyCard imgSrc="/images/svg/logo-react.svg" altText="React Native" label="React Native" />
              <TechnologyCard imgSrc="/images/svg/logo-expo.svg" altText="Expo" label="Expo" />
              <TechnologyCard imgSrc="/images/svg/logo-nextjs.svg" altText="Next.js" label="Next.js" />
              <TechnologyCard imgSrc="/images/svg/logo-typescript.svg" altText="TypeScript" label="TypeScript" />
              <TechnologyCard imgSrc="/images/svg/logo-tailwindcss.svg" altText="Tailwind CSS" label="Tailwind CSS" />
              <TechnologyCard imgSrc="/images/svg/logo-antd.svg" altText="Ant Design" label="Ant Design" />
              <TechnologyCard imgSrc="/images/svg/logo-mui.svg" altText="MaterialUI" label="Material UI" />
              <TechnologyCard imgSrc="/images/svg/logo-node.svg" altText="Node.js" label="Node.js" />
              <TechnologyCard imgSrc="/images/svg/logo-github.svg" altText="GitHub" label="GitHub" />
              <TechnologyCard imgSrc="/images/svg/logo-gitlab.svg" altText="GitLab" label="GitLab" />
              <TechnologyCard imgSrc="/images/svg/logo-zustand.svg" altText="Zustand" label="Zustand" />
              <TechnologyCard imgSrc="/images/svg/logo-react-query.svg" altText="React Query" label="React Query" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center md:text-left">Other Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <TechnologyCard imgSrc="/images/svg/logo-redux.svg" altText="Redux" label="Redux" />
              <TechnologyCard imgSrc="/images/svg/logo-graphql.svg" altText="GraphQL" label="GraphQL" />
              <TechnologyCard imgSrc="/images/svg/logo-apollo-graphql.svg" altText="Apollo GraphQL" label="Apollo GraphQL" />
              <TechnologyCard imgSrc="/images/svg/logo-html.svg" altText="HTML" label="HTML" />
              <TechnologyCard imgSrc="/images/svg/logo-css.svg" altText="CSS" label="CSS" />
              <TechnologyCard imgSrc="/images/svg/logo-javascript.svg" altText="JavaScript" label="JavaScript" />
              <TechnologyCard imgSrc="/images/svg/logo-nestjs.svg" altText="NestJS" label="NestJS" />
              <TechnologyCard imgSrc="/images/svg/logo-prisma.svg" altText="Prisma" label="Prisma" />
              <TechnologyCard imgSrc="/images/svg/logo-sass.svg" altText="Sass" label="Sass" />
              <TechnologyCard imgSrc="/images/svg/logo-vtex.svg" altText="VTEX" label="Vtex | Vtex IO" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
