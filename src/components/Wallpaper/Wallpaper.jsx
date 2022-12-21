import s from './Wallpaper.module.scss';
export const WallPaper = () => {
  return (
    <>
      <div className={s.hero}>
        <div className={s.cube}></div>
        <div className={s.cube}></div>
        <div className={s.cube}></div>
        <div className={s.cube}></div>
        <div className={s.cube}></div>
      </div>
    </>
  );
};
