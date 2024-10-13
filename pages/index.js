import {Template} from '@/components/template';
import {urlMeta} from '@/components/lib';
import {Landing} from '@/components/content';

export default function Home() {
  return (
    <Template urlMeta={urlMeta.home}>
      <Landing/>
    </Template>
  );
}
