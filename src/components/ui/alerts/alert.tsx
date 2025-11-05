import { Alert as ShadAlert } from "@/components/ui/alert";
import { motion } from "framer-motion";

export const Alert = ({
  children,
  variant = "default",
  className = "",
  id = "",
}: AlertProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    data-aos="fade-up"
    data-aos-delay="1200"
  >
    <ShadAlert variant={variant} id={id} className={className}>
      {children}
    </ShadAlert>
  </motion.div>
);

export const AlertDanger = ({ children, className = "", id }: AlertProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    id={id}
    data-aos="fade-up"
    data-aos-delay="1200"
    className={
      className +
      " text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current"
    }
  >
    {children}
  </motion.div>
);

export const AlertSuccess = ({ children, className = "", id }: AlertProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    id={id}
    data-aos="fade-up"
    data-aos-delay="1200"
    className={
      className +
      " text-success bg-card *:data-[slot=alert-description]:text-success/90 relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current"
    }
  >
    {children}
  </motion.div>
);
