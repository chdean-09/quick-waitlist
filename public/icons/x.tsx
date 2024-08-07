import { cn } from '@/lib/utils';

export function X({ ...props }: { className?: string }) {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-20 h-20', props.className)}
    >
      <path d="M10.7119 7.84315L17.4124 0.221436H15.8243L10.0078 6.83901L5.3599 0.221436H0L7.02742 10.2294L0 18.2214H1.58812L7.73149 11.2323L12.6401 18.2214H18L10.7119 7.84315ZM8.53746 10.3169L7.82545 9.32043L2.15984 1.39144H4.59893L9.17006 7.79044L9.88207 8.78686L15.8256 17.1054H13.3865L8.53746 10.3169Z" />
    </svg>
  );
}
