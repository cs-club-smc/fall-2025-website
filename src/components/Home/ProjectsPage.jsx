

function ProjectsPage() {
  return (
    <>
    <div >
      <h1 className="projectsPage-title">Projects Page</h1>
      <p className="projectsPage-body">Coming Soon!</p>
    </div>

    <style jsx>{`
      .projectsPage-title {
          position: absolute;
          left: 50%;
          top: 154px;
          transform: translateX(-50%);
          width: 1079px;
          height: 122px;
          font-family: 'Russo One', sans-serif;
          font-size: 96px;
          font-weight: 400;
          line-height: normal;
          text-align: center;
          color: #F1F5F9;
          margin: 0;
        }
          .projectsPage-body {
          position: absolute;
          left: 50%;
          top: 350px;
          transform: translateX(-50%);
          width: 1079px;
          height: 122px;
          font-family: 'Russo One', sans-serif;
          font-size: 60px;
          font-weight: 200;
          line-height: normal;
          text-align: center;
          color: #f1f5f998;
          margin: 0;
        }
    `}</style>
    </>
  );
}

export default ProjectsPage;